'use strict';

// common modules
const gulp = require('gulp');
const browserSync = require('browser-sync');
const conf = require('./config');

// tasks
const sass = require('./gulp/sass');
const pug = require('./gulp/pug');
const copy = require('./gulp/copy');
const script = require('./gulp/script');
const imagemin = require('./gulp/image');
const htmlhint = require('./gulp/htmlhint');
const eslint = require('./gulp/eslint');
const clean = require('./gulp/clean');

// default
gulp.task('default', () => {
  const src = conf.src;
  const dist = conf.dest;
  browserSync.init({ server: `${dist}/` });
  gulp.watch(`${src}${conf.sass.src}`, gulp.series('sass'));
  gulp.watch(`${src}${conf.pug.src}`, gulp.series('pug'));
  gulp.watch(`${src}${conf.script.src}`, gulp.series('script'));
  gulp.watch(`${src}${conf.imagemin.src}`, gulp.series('imagemin'));
});

// check
gulp.task('validate', gulp.series('htmlhint', 'eslint'));

// build
gulp.task('build', gulp.parallel('sass', 'pug', 'script', 'imagemin', 'copy'));

// release
gulp.task(
  'release',
  gulp.series('clean', 'sass', 'pug', 'script', 'imagemin', 'copy', 'htmlhint')
);
