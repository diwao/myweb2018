'use strict';

// common modules
const { src, dest } = require('gulp');
const fs = require('fs');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const conf = require('../config');

// pug modules
const pug = require('gulp-pug');

// task
const compilePug = done => {
  const pugSrc = [conf.src + conf.pug.src, '!' + conf.src + conf.pug.exclude];
  const pugDest = conf.dest + conf.pug.dest;
  const pugOptions = { pretty: true };
  pugOptions.locals = JSON.parse(
    fs.readFileSync('./app/src/pug/' + 'site.json')
  );
  src(pugSrc)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      })
    )
    .pipe(pug(pugOptions))
    .pipe(dest(pugDest))
    .pipe(browserSync.stream());
  done();
};

module.exports = compilePug;
