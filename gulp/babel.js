'use strict';

// 必要プラグインの読み込み
const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

gulp.task('babel', () => {
  // 設定ファイル読み込み
  const webpackConfig = require('../webpack.config');
  const conf = require('../config');

  const dest = conf.dest + conf.babel.dest;

  return webpackStream(webpackConfig, webpack)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(gulp.dest(dest))
    .pipe(notify({
      title: 'jsをバンドルしました',
      message: new Date(),
      sound: 'Glass'
    }));
});
