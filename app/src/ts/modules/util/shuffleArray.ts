'use strict';

export default (array) => {
  let n = array.length;
  let t;
  let i;
  while(n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
}
