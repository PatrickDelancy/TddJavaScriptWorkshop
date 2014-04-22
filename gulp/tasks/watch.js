var gulp       = require('gulp');
var config	   = require('../config');

gulp.task('watch', function(){
	gulp.watch(config.src.scripts, ['browserify']);
	gulp.watch(config.src.sass, ['compass']);
	gulp.watch(config.src.html, ['html']);
});
