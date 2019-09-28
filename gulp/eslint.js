'use strict';

// common modules
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const config = require('../config');

// task
gulp.task('eslint', function() {
  const src = `${config.src}${config.script.src}`;
  return gulp
    .src(src)
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
  //   .pipe(notify({
  //     title: 'eslintを実行しました！',
  //     message: new Date(),
  //     sound: 'Glass'
  //   })
  // );
});
