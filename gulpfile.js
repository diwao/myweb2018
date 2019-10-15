'use strict';

// common modules
const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync');
const conf = require('./config');

// tasks
const compileScss = require('./gulp/sass');
const compilePug = require('./gulp/pug');
const transpileTs = require('./gulp/script');
const minifyImages = require('./gulp/image');
const copy = require('./gulp/copy');
const validHtml = require('./gulp/htmlhint');
const validScript = require('./gulp/eslint');
const clean = require('./gulp/clean');

// default
const defaultTask = () => {
  const src = conf.src;
  const dist = conf.dest;
  browserSync.init({ server: `${dist}/` });
  watch(`${src}${conf.sass.src}`, compileScss);
  watch(`${src}${conf.pug.src}`, compilePug);
  watch(`${src}${conf.script.src}`, transpileTs);
  watch(`${src}${conf.imagemin.src}`, minifyImages);
};
exports.default = defaultTask;
// check
exports.validate = series(validHtml, validScript);
// build
exports.build = parallel(
  compileScss,
  compilePug,
  transpileTs,
  minifyImages,
  copy
);

// // release
exports.release = series(
  clean,
  compileScss,
  compilePug,
  transpileTs,
  minifyImages,
  copy,
  validHtml,
  validScript
);
