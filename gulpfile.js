'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');

// Task to compile scss to css
gulp.task('sass', function(){
  return gulp.src('app/scss/page_three.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

