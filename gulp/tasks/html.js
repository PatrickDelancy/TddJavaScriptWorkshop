var gulp		= require('gulp');
var fileinclude = require('gulp-file-include');
var config		= require('../config');

gulp.task('html', function() {
	gulp.src(config.src.html)
		.pipe(fileinclude())
		.pipe(gulp.dest(config.dest));
});
