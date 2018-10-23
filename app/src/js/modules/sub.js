// export class Hello {
//   constructor() {
//     console.log('hello! from class');
//   }
// }

class Hello {
  constructor() {
    console.log('hello! from class');
  }
  say(name) {
    return `${name}です`;
  }
}

module.exports = Hello;
