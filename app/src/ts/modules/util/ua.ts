'use strict';
export default class Ua {
  private ua: String;

  constructor() {
    this.ua = window.navigator.userAgent.toLowerCase();
  }

  isIE() {
    return this.ua.indexOf('msie') >= 0 || this.ua.indexOf('trident') >= 0;
  }

  isFF() {
    return this.ua.indexOf('firefox') >= 0;
  }

  isChrome() {
    return this.ua.indexOf('chrome') >= 0;
  }

  isSafari() {
    return this.ua.indexOf('safari') >= 0 && !(this.ua.indexOf('chrome') >= 0);
  }

  isEdge() {
    return this.ua.indexOf('edge') >= 0;
  }

  isIOS() {
    return this.ua.indexOf('ipad') >= 0 || this.ua.indexOf('iphone') >= 0;
  }

  isAndroid() {
    return this.ua.indexOf('android') >= 0;
  }
}
