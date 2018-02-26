'use strict';

// モジュール読み込み
const gulp = require('gulp');
const fs = require('fs');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const conf = require('../config');

// タスク
gulp.task('pug', () => {
  const src = [conf.src + conf.pug.src, '!' + conf.src + conf.pug.exclude];
  const dest = conf.dest + conf.pug.dest;
  const pugOptions = {pretty: true};
  pugOptions.locals = JSON.parse(fs.readFileSync('./app/src/pug/' + 'site.json'))
  return gulp.src(src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(pug(pugOptions))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'pugをコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    }));
});
