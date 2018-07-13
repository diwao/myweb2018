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
gulp.task('default', () => {
  browserSync.init({ server: './app/dist/' });
  gulp.watch('./app/src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./app/src/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('./app/src/js/**/*.js', gulp.series('babel'));
  gulp.watch('./app/src/images/**', gulp.series('copy'));
});

// ビルド
gulp.task('build', (done)=>{
  gulp.series('sass', 'pug', 'copy', 'babel');
  return done();
});
