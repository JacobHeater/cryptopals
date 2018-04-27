const {
  scoreKeys
} = require('../../set1/helpers');

describe('Score keys tests', () => {

  it('Should order a list of possible cipher keys by order of occurrence.', () => {

    const XORd = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
    const expected = '78';
    const scored = scoreKeys(XORd);
    const actual = scored[0];

    expect(scored.length).toBeGreaterThan(0);
    expect(actual).toEqual(expected);
  });

});
