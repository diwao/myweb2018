'use strict';

// スプライトアニメーションを実装する
export default class SpriteAnime {
  private elm: HTMLElement;
  private duration: number;
  private frameCount: number;
  private frameSize: number;
  private timer: any;

  constructor(elm: HTMLElement, duration = 10) {
    this.elm = elm;
    this.duration = duration;
    this.frameCount = this.getFrameCount(this.elm);
    this.frameSize = this.setFrameSize();
    this.timer = null;
  }

  // アニメーションのフレーム数を取得
  getFrameCount(elm: HTMLElement): number {
    let frameCount = parseInt(elm.getAttribute('data-frameCount'));
    if (isNaN(frameCount)) {
      frameCount = 0;
    }
    return frameCount;
  }

  getFrameSize() {
    const elm = this.elm;
    let frameSize = Number(elm.clientHeight);
    if (isNaN(frameSize)) {
      frameSize = null;
    }
    return frameSize;
  }

  setFrameSize(): number {
    return (this.frameSize = this.getFrameSize());
  }

  animateOneFrame(count: number) {
    const elm = this.elm;
    const frameSize = this.frameSize;
    elm.style.backgroundPositionY = `-${frameSize * count}px`;
    return elm;
  }

  animateAllFrame(): void {
    const duration = this.duration;
    let count = 0;
    count++;
    this.animateOneFrame(count);
    const repeat = () => {
      // console.log(count);
      this.timer = setTimeout(() => {
        this.animateOneFrame(count);
        count++;
        if (count >= this.frameCount) {
          return;
        }
        repeat();
      }, duration);
    };
    repeat();
  }

  start(): void {
    this.animateAllFrame();
  }

  stop(): void {
    clearTimeout(this.timer);
  }
}
