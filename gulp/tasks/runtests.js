var gulp	= require('gulp');
var jasmine	= require('gulp-jasmine');
var istanbul= require('gulp-istanbul');
var config  = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('runtests', function(cb) {
	gulp.src(config.src.scripts)
		.pipe(istanbul())
		.on('end', function() {
			gulp.src(config.tests)
				.pipe(jasmine())
				.on('error', handleErrors)
		        .pipe(istanbul.writeReports('./coverage'))
		        .on('end', cb);
		})
});
