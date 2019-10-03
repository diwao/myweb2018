'use strict';

// common modules
const gulp = require('gulp');
const del = require('del');
const conf = require('../config');

const path = `${conf.dest}/**/*`;

gulp.task('clean', del.bind(null, [path], { force: true }));
