const { hexToBase64 } = require('../../../set1/challenge1/hex-to-base64');

describe('Hexadecimal string is successfully converted to expected base64 output', () => {

  it('Should convert hexadecimal string to base64', () => {

    const hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
    const expected = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';
    const actual = hexToBase64(hex);

    expect(actual).toEqual(expected);

  });

});