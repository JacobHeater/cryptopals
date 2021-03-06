const decryptSingleByteXORCipher = require('../../../set1/challenge3/decrypt-single-byte-xor-cipher');

// Source: https://cryptopals.com/sets/1/challenges/3

describe('Test single byte XOR cipher decryption', () => {

  it('Should be able to decrypt the single byte XOR hex string.', () => {
    const XORd = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
    const expected = `Cooking MC's like a pound of bacon`;
    const actual = decryptSingleByteXORCipher(XORd);

    expect(actual).not.toEqual(XORd);
    expect(actual).toEqual(expected);
  });

})