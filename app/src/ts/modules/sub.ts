'use strict';

class Hello {
  constructor() {
    console.log('hello! from class');
  }
  say(name: string): string {
    return `${name}です`;
  }
}

export default Hello;
