'use strict';

// common modules
const { src, dest } = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const conf = require('../config');

// scss modules
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const cssWring = require('csswring');

// env
const mode = process.env.NODE_ENV;

// options
const autoprefixerOption = {
  grid: true
};

let postcssOption = [flexBugsFixes, autoprefixer(autoprefixerOption)];

if (mode === 'production') {
  postcssOption.push(cssWring);
}

// task
const compileScss = done => {
  const scssSrc = conf.src + conf.sass.src;
  const scssDest = conf.dest + conf.sass.dest;
  src(scssSrc)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      })
    )
    .pipe(sass())
    .pipe(postcss(postcssOption))
    .pipe(dest(scssDest))
    .pipe(browserSync.stream());
  done();
};

module.exports = compileScss;
