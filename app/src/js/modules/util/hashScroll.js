import $ from 'jquery';
import scroll from './scroll.js';

export default (className, _margin = 0, func) => {
  $(className).on('click', function (e) {
    e.preventDefault();
    const hash = $(this).attr('href');
    let target = 'html';
    if (hash.match(/^#.+/)) {
      target = hash;
    }

    const margin = _margin;
    const to = $(target).offset().top - margin;
    scroll(to);

    // コールバック
    if (typeof func === 'function') {
      func();
    }
  });
};
