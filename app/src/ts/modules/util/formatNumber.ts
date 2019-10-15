'use strict';

// 数値をカンマ区切りのテキストにする
export default (value: number): string => {
  if (typeof value !== 'number') {
    return String(value);
  }
  const arr = value.toString().split('.');
  arr[0] = arr[0].toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  return arr.join('.');
};
