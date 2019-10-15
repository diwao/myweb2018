'use strict';

// common modules
const { src } = require('gulp');
const htmlhint = require('gulp-htmlhint');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const config = require('../config');

const validHtmlhint = done => {
  const htmlhintSrc = `${config.dest}${config.htmlhint.src}`;
  src(htmlhintSrc)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      })
    )
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
  done();
};

module.exports = validHtmlhint;
