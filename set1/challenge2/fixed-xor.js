const { hexToAscii } = require('../challenge1/hex-to-base64');

module.exports = fixedXOR;

/**
 * Assumes that hex1 and hex2 are the same length,
 * and produces the XOR difference between the two
 * strings.
 * 
 * @param {String} hex1 The first hexadecimal string.
 * @param {String} hex2 The second hexadecimal string.
 * @returns {String}
 */
function fixedXOR(hex1, hex2) {

  // Convert the hex to ascii.
  let ascii1 = hexToAscii(hex1);
  let ascii2 = hexToAscii(hex2);

  // Create byte[] from the ascii strings.
  let buffer1 = Buffer.from(ascii1);
  let buffer2 = Buffer.from(ascii2);

  let xord = [];

  for (let i = 0; i < buffer1.length; i++) {
    let byte1 = buffer1[i];
    let byte2 = buffer2[i];

    // ^ operator is XOR in JS
    let xor = byte1 ^ byte2;
    // base16 is hexadecimal string encoding of byte.
    let base16 = xor.toString(16);

    xord.push(base16);
  }

  // Return the concatenated hex string.
  return xord.reduce((c, n) => c + n);

}