'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
	gulp.src('sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));
	gulp.watch('sass/*.sass');	
});
gulp.task('default',function(){
	gulp.watch('sass/*.sass',['sass']);
});
	