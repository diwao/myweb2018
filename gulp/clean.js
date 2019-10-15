'use strict';

// common modules
const { task } = require('gulp');
const del = require('del');
const conf = require('../config');

const path = `${conf.dest}/**/*`;

task('clean', del.bind(null, [path], { force: true }));
module.exports = task('clean');
