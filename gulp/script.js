'use strict';

// common modules
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

// modules
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

// task
gulp.task('script', () => {
  const mode = process.env.NODE_ENV;
  const webpackConfig = require('../webpack.config');
  if (mode === 'production') {
    webpackConfig.mode = mode;
  }
  const conf = require('../config');
  const dest = conf.dest + conf.script.dest;
  return webpackStream(webpackConfig, webpack)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      })
    )
    .pipe(gulp.dest(dest));
});
