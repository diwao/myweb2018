export default (_interval) => {
  const interval = _interval;
  let flg = false;

  return (func) => {
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
