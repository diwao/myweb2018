'use strict';

// intervalに指定した間隔（ms）以内に発生した処理を間引く
export default (interval: number) => {
  let flg = false;

  return (func: () => void): boolean => {
    if (!(typeof func === 'function')) {
      return false;
    }

    if (flg) {
      return false;
    } else {
      flg = true;
      func();
      setTimeout(function () {
        flg = false;
      }, interval);
    }
    return flg;
  };
};
