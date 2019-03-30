const assert = require('assert');

const Hello = require('../app/src/js/modules/sub');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('自分の名前はTaro', () => {
      const name = 'Taro';
      assert(name === 'Taro');
    });
  });

  describe('Helloクラス', () => {
    const hello = new Hello();
    const message = hello.say('Taro');
    it('メッセージは"Taroです"', () => {
      assert(message === 'Taroです');
    });
  });
});
