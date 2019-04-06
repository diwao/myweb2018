import $ from 'jquery';

// st: scrollTop
export default (st, elm) => {
  const $elm = $(elm);
  const ratio = $elm.attr('data-ratio');
  const moveVal = (st - $elm.offset().top - $elm.height() + $(window).height()) * Number(ratio);
  // console.log(moveVal);
  if (moveVal > 0) {
    $elm.css({
      transform: `translateY(${moveVal}px)`
    });
  }
};
