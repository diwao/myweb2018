'use strict';
export default (name) => {
  const url = location.href;
  let params;
  let param = [];
  let str = url.replace(/[?&]/g, '<>');
  params = str.split('<>');
  for (let i = 0; i < params.length; i++) {
    param.push(params[i].split('='));
  }
  for (let i = 0; i < param.length; i++) {
    if (param[i][0] === name) {
      //調べたパラメータがあればその値を返す
      return param[i][1];
    }
  }
  return false;
};
