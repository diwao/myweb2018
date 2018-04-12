'use strict';

// モジュール読み込み
const gulp = require('gulp');
const browserSync = require('browser-sync');

// タスク読み込み
const sass = require('./gulp/sass');
const pug = require('./gulp/pug');
const copy = require('./gulp/copy');
const babel = require('./gulp/babel');

// デフォルトタスク
gulp.task('default', function(){
  browserSync.init({
    server: {
      baseDir: 'app/dist/'
    }
  });
  gulp.watch('./app/src/scss/**/*.scss', ['sass']);
  gulp.watch('./app/src/pug/**/*.pug', ['pug']);
  gulp.watch('./app/src/js/**/*.js', ['babel']);
  gulp.watch('./app/src/images/**', ['copy']);
});

// ビルド
gulp.task('build', ['sass', 'pug', 'copy', 'babel']);
