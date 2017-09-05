'use strict'

const gulp   = require('gulp'),
      sass   = require('gulp-sass'),
      rename = require('gulp-rename');

// paths
const path = {
      scss: './build/**/*.scss',
      css: './assets',
}

// sass
gulp.task('sass', function() {
    return gulp.src(path.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(path.css));
});

// watch
gulp.task('watch', function() {
    gulp.watch(path.scss, ['sass']);
});

// default
gulp.task('default', ['sass'], function() {
    gulp.once('end', function () {
        process.exit();
    });
});