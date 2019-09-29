'use strict';

import * as $ from 'jquery';

// st: scrollTop
export default (st: number, el: string) => {
  const $el = $(el);
  const ratio = $el.attr('data-ratio');
  const moveVal = (st - $el.offset().top - $el.height() + $(window).height()) * Number(ratio);
  // console.log(moveVal);
  if (moveVal > 0) {
    $el.css({
      transform: `translateY(${moveVal}px)`
    });
  }
};
