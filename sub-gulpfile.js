module.exports = function (gulp, plugins) {
	return {
		watch: [html],
		prod: [deploy]
	};

	function html() {
		plugins.watch(__dirname+'/development/src/jade/**/*.jade', function() {
            // It observer files changing and Do something.
        });
	}
	function deploy() {
		// Do domething to deploy compiled files to production use. 
	};
	
};