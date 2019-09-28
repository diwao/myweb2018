'use strict';

// Libs
// import { TimelineMax, Power0, TweenMax, Back, Elastic, Bounce, Linear, Power3 } from 'gsap/all';
// import { Howl, Howler } from 'howler';
// import imagesLoaded from 'imagesloaded';
// import 'slick-carousel';
import Vue from 'vue';

// myModules
import Hello from './modules/sub';
import initThrottle from './modules/util/initThrottle';
import scrollMagicSample from './modules/scrollMagicSample';

// DOM解析後に発火
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');

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
});

// ページ読み込み後に発火
window.addEventListener('load', () => {
  console.log('load');

  const hello = new Hello();
  console.log(hello.say('Jiro'));

  const resizeThrottle = initThrottle(1000);
  window.addEventListener('resize', function(){
    resizeThrottle(function(){
      console.log('resize');
    });
  });

  scrollMagicSample();
});
