'use strict';

export default class SpriteAnime {
  constructor(elm, duration = 10){
    const getFrameCount = (elm) => {
      let frameCount = parseInt(elm.getAttribute('data-frameCount'));
      if (isNaN(frameCount)) {
        frameCount = 0;
      }
      return frameCount;
    };

    this.elm = elm;
    this.duration = duration;
    this.frameCount = getFrameCount(this.elm);
    this.frameSize = this.setFrameSize();
    this.timer = null;
  }

  getFrameSize(){
    const elm = this.elm;
    let frameSize = Number(elm.clientHeight);
    if (isNaN(frameSize)) {
      frameSize = null;
    }
    return frameSize;
  }

  setFrameSize(){
    return this.frameSize = this.getFrameSize();
  }

  animateOneFrame(count){
    const elm = this.elm;
    const frameSize = this.frameSize;
    elm.style.backgroundPositionY = `-${frameSize * count}px`;
    return elm;
  }

  animateAllFrame() {
    const duration = this.duration;
    let count = 0;
    count++;
    this.animateOneFrame(count);
    const repeat = () => {
      // console.log(count);
      this.timer = setTimeout(()=>{
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

  start(){
    this.animateAllFrame();
  }

  stop(){
    clearTimeout(this.timer);
  }
}
