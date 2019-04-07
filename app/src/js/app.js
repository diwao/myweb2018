'use strict';

const Hello = require('./modules/sub');
import initThrottle from './modules/util/initThrottle';
// import { TimelineMax, Power0, TweenMax, Back, Elastic, Bounce, Linear, Power3 } from 'gsap/all';
// import { Howl, Howler } from 'howler';
// import imagesLoaded from 'imagesloaded';
// import $ from 'jquery';
// import 'slick-carousel';

window.addEventListener('load', () => {
  const hello = new Hello();
  console.log(hello.say('Jiro'));

  const resizeThrottle = initThrottle(1000);
  window.addEventListener('resize', function(){
    resizeThrottle(function(){
      console.log('resize');
    });
  });
});
