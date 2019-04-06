'use strict';
export default (num) => {
  const str = '0' + num;
  return str.substr(-2, 2);
}
