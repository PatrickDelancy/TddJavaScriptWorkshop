var connect = require('gulp-connect');
var gulp    = require('gulp');
var config  = require('../config');
var path    = require('path');

gulp.task('serve', function() {
	connect.server({
		root: path.resolve(config.dest),
		livereload: true
	});
});
