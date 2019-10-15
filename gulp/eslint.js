'use strict';

// common modules
const { src } = require('gulp');
const eslint = require('gulp-eslint');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const config = require('../config');

// task
const validEslint = done => {
  const eslintSrc = `${config.src}${config.script.src}`;
  src(eslintSrc)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      })
    )
    .pipe(eslint({ userEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(
      eslint.result(function(result) {
        if (result.errorCount !== 0) {
          return;
        }
      })
    );
  done();
};

module.exports = validEslint;
