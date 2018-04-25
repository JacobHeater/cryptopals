const fixedXOR = require('../../../set1/challenge2/fixed-xor');

describe('Creates the XOR difference between two buffers', () => {

  it('Creates the desired XOR output between the two buffers', () => {

    const hex1 = '1c0111001f010100061a024b53535009181c';
    const hex2 = '686974207468652062756c6c277320657965';
    const expected = '746865206b696420646f6e277420706c6179';
    const actual = fixedXOR(hex1, hex2);

    expect(actual).toEqual(expected);

  });

});