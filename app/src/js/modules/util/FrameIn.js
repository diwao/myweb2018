export default class FramIn {
  constructor(elm, buffer = 320) {
    this.buffer = buffer;
    this.elms = document.querySelectorAll(elm);
    this.elmDatas = [];
    this.windowHeight = null;
    this.setDatas();
  }

  setDatas(){
    this.elmDatas = [];
    for (let i = 0, len = this.elms.length; i < len; i++) {
      let elm = this.elms[i];
      this.elmDatas.push({
        elm: elm,
        offsetTop: elm.offsetTop,
        offsetHeight: elm.offsetHeight,
        view: null
      });
    }
    this.windowHeight = window.innerHeight;
    // console.log(this.elmDatas);
    return this.elmDatas;
  }

  setBuffer(val){
    this.buffer = val;
  }

  isFrameIn(st, func){
    for (let i = 0, len = this.elmDatas.length; i < len; i++) {
      let flg = false;
      const elmData = this.elmDatas[i];
      const rect = elmData.elm.getBoundingClientRect();
      const offsetTop = st + rect.top;
      const clientHeight = rect.height;
      if (offsetTop < st + this.windowHeight - this.buffer && offsetTop + clientHeight > st) {
        flg = true;
      }
      elmData.view = flg
      if (typeof func === 'function') {
        func(elmData);
      }
    }
    return this.elmDatas;
  }
}
