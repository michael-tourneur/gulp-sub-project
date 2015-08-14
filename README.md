# SubGulp
SubGulp is a boilerplate to structure your project into sub projects.

### Version
0.0.1

### Installation
```
$ git clone git@github.com:michael-tourneur/gulp-sub-project.git
$ cd gulp-sub-project
$ npm install
```

### Configuration
A config.json file is available to configure your sub projects.

* "glob" key => Array to Define the paths to search the gulpfile.js files of your sub projects.
* "tasks" key => Array to enabled tasks from your sub project


### Sub project
Each of your sub projects will implement a sub-gulpfile.js folowing the default sub-gulfile.js availaible into the main project root.

The sub-gulpfile.js should return an object of tasks. The object's key is the name of the task. The object's value is a function implementing the task. 
