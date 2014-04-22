var compass      = require('gulp-compass');
var minifyCss	 = require('gulp-minify-css');
var gulp         = require('gulp');
var config       = require('../config');
var path		 = require('path');

gulp.task('compass', function() {
	gulp.src(config.src.sass)
		.pipe(compass({
			config_file: path.resolve('./config.rb'),
			css: config.dest + '/css',
			sass: config.src.root + '/sass'
		}))
		.pipe(minifyCss())
		.pipe(gulp.dest(config.dest + '/css'));
});
