'use strict';

// Libs
// import { TimelineMax, Power0, TweenMax, Back, Elastic, Bounce, Linear, Power3 } from 'gsap/all';
// import { Howl, Howler } from 'howler';
// import imagesLoaded from 'imagesloaded';
// import $ from 'jquery';
// import 'slick-carousel';
import Vue from 'vue';
// import ScrollMagic from 'scrollmagic';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

// myModules
const Hello = require('./modules/sub');
import initThrottle from './modules/util/initThrottle';
import scrollMagicSample from './modules/scrollMagicSample';

// main
window.addEventListener('load', () => {
  const hello = new Hello();
  console.log(hello.say('Jiro'));

  const resizeThrottle = initThrottle(1000);
  window.addEventListener('resize', function(){
    resizeThrottle(function(){
      console.log('resize');
    });
  });

  new Vue({
    el: '#app',
    data: {
      count: 10
    },
    methods: {
      countUp() {
        this.count++;
      }
    }
  });

  scrollMagicSample();
});
