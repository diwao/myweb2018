'use strict';

// Libs
import { TweenMax, Bounce } from 'gsap';
// import { Howl, Howler } from 'howler';
// import imagesLoaded from 'imagesloaded';
// import 'slick-carousel';
import Vue from 'vue';
import * as $ from 'jquery';

// myModules
import Hello from './modules/sub';
import initThrottle from './modules/util/initThrottle';
import scrollMagicSample from './modules/scrollMagicSample';

import Sprite from './modules/util/SpriteAnime';
import hashScroll from './modules/util/hashScroll';

// DOM解析後に発火
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM解析完了');

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
  console.log('ページ読み込み完了');

  // TweenMaxのサンプルコード
  TweenMax.to('#firstBox', 1, {
    x: 100,
    ease: Bounce.easeOut
  });

  // 自作モジュールの読み込みサンプル
  const hello = new Hello();
  console.log(hello.say('Jiro'));

  // リサイズイベントの設定サンプル
  const resizeThrottle = initThrottle(1000);
  window.addEventListener('resize', function() {
    resizeThrottle(function() {
      console.log('resize event fired!');
    });
  });

  scrollMagicSample();

  // スプライトアニメーションのサンプル
  const sprite = new Sprite('#sprite', 200);
  const spriteStart: HTMLElement = document.getElementById('spriteStart');
  const spriteStop: HTMLElement = document.getElementById('spriteStop');
  spriteStart.addEventListener('click', () => {
    sprite.start();
  });
  spriteStop.addEventListener('click', () => {
    sprite.stop();
  });

  // スクロール
  hashScroll('.js-scroll', 0 ,function(){
    console.log('hoge');
  });
});
