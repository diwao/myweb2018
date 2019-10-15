'use strict';

// モジュール読み込み
const { src, dest } = require('gulp');
const conf = require('../config');

const copy = done => {
  const copySrc = './app/src/static/**';
  const copyDest = conf.dest + '/';
  src(copySrc).pipe(dest(copyDest + '/'));
  done();
};

module.exports = copy;
