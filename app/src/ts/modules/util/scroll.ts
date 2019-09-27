import $ from 'jquery';

export default (to, callback) => {
  // ユーザーのスクロール操作禁止
  $(document).on('touchmove mousewheel', function (e) {
    e.preventDefault();
  });

  $('html,body').animate({
    scrollTop: to
  }, {
    duration: 500,
    complete: function () {
      // ユーザーのスクロール操作許可
      $(document).off('touchmove mousewheel');
      if (callback) {
        callback();
      }
    }
  });
};
