//DEPENDENCIES
var fs = require('fs');
var gulp = require('gulp');
var es = require('event-stream');
var gulpLoadPlugins = require('gulp-load-plugins');

//LOAD CONFIG FILE
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
if(!config.glob) return console.error("Please configure the glob key from config.json.");

//SETUP CONFIG
var glob = config.glob;
var tasks = ['default'].concat(config.tasks);

//START
start();

function start() {

	tasks.forEach(function(task) {
		gulp.task(task, function(){
			_checkTasks(task);
		});
	});

}

function _loadTasks(file, op) {

	var tasks = require(file.path)(gulp, gulpLoadPlugins());
	
	if(tasks[op]) {
		Object.keys(tasks[op]).forEach(function(i) {
			tasks[op][i]();
		});
	}

}

function _checkTasks(op){
	
	gulp.src(glob)
	.pipe(es.map(function (file, cb) {
		_loadTasks(file, op);
      	cb();
    }));

}