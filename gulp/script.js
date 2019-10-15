'use strict';

// common modules
const { dest } = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

// modules
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

// task
const transpileTs = done => {
  const mode = process.env.NODE_ENV;
  if (mode === 'production') {
    webpackConfig.mode = mode;
  }
  const conf = require('../config');
  const destTs = conf.dest + conf.script.dest;
  webpackStream(webpackConfig, webpack)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      })
    )
    .pipe(dest(destTs));
  done();
};

module.exports = transpileTs;
