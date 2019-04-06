'use strict';

// common modules
const gulp = require('gulp');
const htmlhint = require('gulp-htmlhint');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const config = require('../config');

gulp.task('htmlhint', () => {
  const src = `${config.dest}${config.htmlhint.src}`;
  return gulp.src(src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(notify({
      title: 'run htmlhint',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
