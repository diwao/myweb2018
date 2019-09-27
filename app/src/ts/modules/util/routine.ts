'use strict';
class Routine {
  constructor() {
    this.func = null;
    this.timer = null;
    this.duration = null;
  }

  init(func) {
    const minutes = 5;  // 5分
    this.duration = minutes * 1000 * 60;
    const repeat = () => {
      if (typeof func === 'function') {
        func();
        this.timer = setTimeout(repeat, this.duration);
      }
    };
    return this.func = repeat;
  }

  start() {
    const self = this;
    self.timer = setTimeout(self.func, this.duration);
  }

  stop() {
    const self = this;
    clearTimeout(self.timer);
    self.timer = null;
  }

  restart() {
    this.stop();
    this.start();
  }
}

export default Routine;
