'use strict';
export default () => {
  let flg = false;
  let timer = null;

  document.body.addEventListener('touchstart', function(e) {
    if (flg) {
      e.preventDefault();
    }
  });

  document.body.addEventListener('touchend', function() {
    flg = true;
    clearTimeout(timer);
    timer = setTimeout(function() {
      flg = false;
    }, 300);
  });
}
