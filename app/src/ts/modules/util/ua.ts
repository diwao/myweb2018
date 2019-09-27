'use strict';

// ユーザーエージェントを判定するオブジェクトを生成する
export default class Ua {
  private ua: String;

  constructor() {
    this.ua = window.navigator.userAgent.toLowerCase();
  }

  isIE(): boolean {
    return this.ua.indexOf('msie') >= 0 || this.ua.indexOf('trident') >= 0;
  }

  isFF(): boolean {
    return this.ua.indexOf('firefox') >= 0;
  }

  isChrome(): boolean {
    return this.ua.indexOf('chrome') >= 0;
  }

  isSafari(): boolean {
    return this.ua.indexOf('safari') >= 0 && !(this.ua.indexOf('chrome') >= 0);
  }

  isEdge(): boolean {
    return this.ua.indexOf('edge') >= 0;
  }

  isIOS(): boolean {
    return this.ua.indexOf('ipad') >= 0 || this.ua.indexOf('iphone') >= 0;
  }

  isAndroid(): boolean {
    return this.ua.indexOf('android') >= 0;
  }
}
