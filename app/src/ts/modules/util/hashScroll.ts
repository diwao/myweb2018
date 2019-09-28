import scroll from './scroll';

import * as $ from 'jquery';

export default (selector: string, _margin = 0, callback) => {
  // console.log($);
  $(selector).on('click', function(e) {
    e.preventDefault();
    const hash: string = $(this).attr('href');
    let target: string = 'html';
    if (hash.match(/^#.+/)) {
      target = hash;
    }

    const margin: number = _margin;
    const to: number = $(target).offset().top - margin;

    // コールバック
    if (typeof callback === 'function') {
      scroll(to, callback);
    } else {
      scroll(to, {});
    }
  });
};
