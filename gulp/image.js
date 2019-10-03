'use strict';

// common modules
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const conf = require('../config');

// pug modules
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

// option
const imageminOption = [
  imageminPngquant({ quality: [0.5, 0.8] }),
  imageminMozjpeg({ quality: 80 }),
  imagemin.gifsicle(),
  imagemin.jpegtran(),
  imagemin.optipng(),
  imagemin.svgo()
];

// task
gulp.task('imagemin', () => {
  const src = conf.src + conf.imagemin.src;
  const dest = conf.dest + conf.imagemin.dest;
  return gulp
    .src(src)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      })
    )
    .pipe(imagemin(imageminOption))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});
