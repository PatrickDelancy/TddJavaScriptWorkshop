var gulp	= require('gulp');
var jasmine	= require('gulp-jasmine');
var config  = require('../config');

gulp.task('runtests', function() {
	gulp.src(config.tests)
		.pipe(jasmine());
});
