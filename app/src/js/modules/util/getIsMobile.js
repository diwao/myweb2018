export default () => {
  let flg = null;
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/iphone/i) || ua.match(/ipad/i)) {
    flg = true;
  } else if (ua.match(/android/i)) {
    flg = true;
  } else {
    flg = false;
  }
  return flg;
};
