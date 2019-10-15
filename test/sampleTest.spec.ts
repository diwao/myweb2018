import zeroPadding from '../app/src/ts/modules/util/zeroPadding';

describe('ゼロパディング', () => {
  it('4を0埋めすると"04"です', () => {
    expect(zeroPadding(4)).toBe('04');
  });

  it('0を0埋めすると"00"です', () => {
    expect(zeroPadding(0)).toBe('00');
  });

  it.skip('1を0埋めすると"01"です', () => {});

  it('10以上の数字は0そのまま返却します。例えば14を0埋めすると14です', () => {
    expect(zeroPadding(14)).toBe('14');
  });
});
