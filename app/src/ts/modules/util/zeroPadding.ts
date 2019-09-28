'use strict';

// ゼロ埋めした二桁の値を文字列で返却する
export default (_val: number): string => {
  let ret: string;
  const val: number = Math.floor(_val);
  const str = '0' + val;
  ret = str.substr(-2, 2);
  if (val > 99) {
    ret = String(val);
  }
  return ret;
};
