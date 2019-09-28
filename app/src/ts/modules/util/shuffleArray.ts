'use strict';

export default (array: any[]): any[] => {
  let n: number = array.length;
  while(n) {
    let i: number = Math.floor(Math.random() * n--);
    let t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
}
