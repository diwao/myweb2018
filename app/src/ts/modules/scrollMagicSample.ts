import { TimelineMax, Power0, TweenMax, Back, Elastic, Bounce, Linear, Power3 } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default () => {
  // scrollMagic
  const controller = new ScrollMagic.Controller();

  // scene
  new ScrollMagic.Scene({
    triggerElement: '#secondBox',
    triggerHook: 'onEnter',
    offset: 400
  })
  .setTween('#secondBox', .3, {
    x: 500,
    ease: Power0.easeNone
  })
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#thirdBox',
    triggerHook: 'onCenter'
  })
  .setClassToggle('#thirdBox', 'js-active')
  .addTo(controller);
}
