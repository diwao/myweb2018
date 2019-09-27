'use strict';

export default (num: number): string => {
  const str = '0' + num;
  return str.substr(-2, 2);
};
