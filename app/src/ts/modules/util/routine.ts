'use strict';

// 繰り返しの処理を実装する
class Routine {
  private func: any;
  private timer: any;
  private duration: number;

  constructor() {
    this.func = null;
    this.timer = null;
    this.duration = 0;
  }

  // 繰り返しの処理を登録する
  init(func): void {
    const minutes = 5;  // 5分
    this.duration = minutes * 1000 * 60;
    const repeat = () => {
      if (typeof func === 'function') {
        func();
        this.timer = setTimeout(repeat, this.duration);
      }
    };
    this.func = repeat;
  }

  // 繰り返しを開始する
  start(): void {
    const self = this;
    self.timer = setTimeout(self.func, this.duration);
  }

  // 繰り返しを停止する
  stop(): void {
    const self = this;
    clearTimeout(self.timer);
    self.timer = null;
  }

  // 最初から開始する
  restart(): void {
    this.stop();
    this.start();
  }
}

export default Routine;
