'use strict';

export default class ZIndexAnime {
  private $parent: JQuery;
  private $children: JQuery;
  private duration: number;
  private max: number;
  private timer: any;

  constructor(target: string) {
    this.$parent = $(target);
    this.$children = this.$parent.find('li');
    this.duration = 300;
    this.max = Number(this.$parent.attr('data-frame'));
    this.timer = null;
  }

  start() {
    const self = this;
    if (self.timer !== null) {
      // console.log('押せない')
      return;
    }
    let idx = 0;
    idx++;
    self.$children.removeClass('js-active');
    self.$children.eq(idx).addClass('js-active');
    function repeat() {
      self.timer = setTimeout(function() {
        idx++;
        if (idx >= self.max) {
          idx = 0;
        }
        self.$children.removeClass('js-active');
        self.$children.eq(idx).addClass('js-active');
        repeat();
      }, self.duration);
    }
    repeat();
  }

  stop() {
    const self = this;
    clearTimeout(self.timer);
    self.$children.removeClass('js-active');
    self.$children.eq(0).addClass('js-active');
    self.timer = null;
  }
}
