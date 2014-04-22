var browserify   = require('gulp-browserify');
var gulp         = require('gulp');
var connect 	 = require('gulp-connect');
var config		 = require('../config');

gulp.task('browserify', function() {
	gulp.src(config.src.scripts)
		.pipe(browserify())
		.pipe(gulp.dest(config.dest + '/js'))
		.pipe(connect.reload());
});
