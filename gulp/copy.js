'use strict';

// モジュール読み込み
const gulp = require('gulp');
const conf = require('../config');

gulp.task('copy', (done) => {
  const dest = conf.dest;
  // image
  gulp.src('./app/src/images/**')
    .pipe(gulp.dest(dest + '/assets/images')
  );
  // その他
  gulp.src('./app/src/other/**')
    .pipe(gulp.dest(dest + '/')
  );
  done();
});
