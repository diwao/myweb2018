'use strict';

class Hello {
  constructor() {
    console.log('hello! from class');
  }
  say(name) {
    return `${name}です`;
  }
}

export default Hello;
