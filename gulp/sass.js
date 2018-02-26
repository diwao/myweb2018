'use strict';

// モジュール読み込み
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const conf = require('../config');

// オプション
const autoprefixerOptions = conf.autoprefixerOptions;

// タスク
gulp.task('sass', function(){
  const src = conf.src + conf.sass.src;
  const dest = conf.dest + conf.sass.dest;
  const opptions = conf.sass.options;
  return gulp.src(src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass(opptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'scssをコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
