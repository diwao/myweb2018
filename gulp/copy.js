'use strict';

// モジュール読み込み
const gulp = require('gulp');
const conf = require('../config');

gulp.task('copy', (done) => {
  const dest = conf.dest;
  gulp.src('./app/src/static/**')
    .pipe(gulp.dest(dest + '/')
  );
  done();
});
