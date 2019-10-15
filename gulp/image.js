'use strict';

// common modules
const { src, dest } = require('gulp');
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
const minifyImages = done => {
  const imgSrc = conf.src + conf.imagemin.src;
  const imgDest = conf.dest + conf.imagemin.dest;
  src(imgSrc)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      })
    )
    .pipe(imagemin(imageminOption))
    .pipe(dest(imgDest))
    .pipe(browserSync.stream());
  done();
};

module.exports = minifyImages;
