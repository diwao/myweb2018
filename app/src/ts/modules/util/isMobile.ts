'use strict';

// スマホかどうかを判定
export default (): boolean => {
  let flg: boolean = false;
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/iphone/i) || ua.match(/ipad/i)) {
    flg = true;
  } else if (ua.match(/android/i)) {
    flg = true;
  }
  return flg;
};
