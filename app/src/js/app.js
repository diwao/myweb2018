'use strict';

import {Hello} from './modules/sub';
// import { TimelineMax, Power0, TweenMax, Back, Elastic, Bounce, Linear, Power3 } from 'gsap/all';
// import { Howl, Howler } from 'howler';
// import imagesLoaded from 'imagesloaded';
// import $ from 'jquery';
// import 'slick-carousel';

window.addEventListener('load', () => {
  const hello = new Hello();
  console.log(hello.say('Jiro'));
});
