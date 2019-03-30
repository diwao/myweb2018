'use strict';

// common modules
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

// babel modules
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

// task
gulp.task('babel', () => {
  const mode = process.env.NODE_ENV;
  console.log(`環境変数：${mode}`);
  const webpackConfig = require('../webpack.config');
  if (mode === 'production') {
    webpackConfig.mode = mode;
  }
  const conf = require('../config');
  const dest = conf.dest + conf.babel.dest;
  return webpackStream(webpackConfig, webpack)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(gulp.dest(dest));
});
