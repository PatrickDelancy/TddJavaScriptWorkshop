var gulp 		= require('gulp');
var jshint 		= require('gulp-jshint');
var config		= require('../config');

gulp.task('validate', function() {
	gulp.src(config.src.scripts)
		.pipe(jshint())
  		.pipe(jshint.reporter('jshint-stylish'))
  		.pipe(jshint.reporter('fail'));
});
