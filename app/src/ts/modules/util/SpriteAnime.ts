'use strict';

// スプライトアニメーションを実装する（横方向）
export default class SpriteAnime {
  private elm: HTMLElement;
  private duration: number;
  private frameCount: number;
  private frameSize: number;
  private timer: number;

  constructor(el: string, duration = 10) {
    this.elm = document.querySelector(el);
    this.duration = duration;
    this.frameCount = this.getFrameCount();
    this.frameSize = this.setFrameSize();
    this.timer = null;
  }

  // アニメーションのフレーム数を取得
  getFrameCount(): number {
    // data-frameCount属性に設定した値を取得（アニメーション数を示す数字）
    let frameCount: number = parseInt(this.elm.getAttribute('data-frameCount'));
    if (isNaN(frameCount)) {
      frameCount = 0;
    }
    return frameCount;
  }

  // スプライト画像1コマのサイズを取得
  getFrameSize(): number {
    const elm = this.elm;
    let frameSize = Number(elm.clientWidth);
    if (isNaN(frameSize)) {
      frameSize = null;
    }
    return frameSize;
  }

  setFrameSize(): number {
    return (this.frameSize = this.getFrameSize());
  }

  animateOneFrame(count: number): void {
    const elm = this.elm;
    const frameSize = this.frameSize;
    elm.style.backgroundPositionX = `-${frameSize * count}px`;
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
          this.timer = null;
          return;
        }
        repeat();
      }, duration);
    };
    repeat();
  }

  start(): void {
    console.log(this.timer);
    if (this.timer === null) {
      this.animateAllFrame();
    }
  }

  stop(): void {
    clearTimeout(this.timer);
  }
}
