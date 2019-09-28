'use strict';

import * as $ from 'jquery';

export default (el: string, duration = 100): void => {
  $(el).find('.js-delay-anime').each(function(i){
    setTimeout(function(){
      $(this).addClass('js-active');
    }.bind(this), duration * i);
  });
};
