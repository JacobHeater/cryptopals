const breakUpHexadecimal = require('./break-up-hex');

/**
 * Converts a base16 string to ASCII encoding.
 * 
 * @param {String} hex The base16 string to convert to ASCII.
 * @returns {String}
 */
function hexToAscii(hex) {
  // Break up the hex into its chars.
  // Then convert hexadecimal to ASCII.
  let base16Chars = breakUpHexadecimal(hex);
  let asciiCodes = base16Chars.map(c => new Number(`0x${c}`).valueOf());
  let asciiChars = asciiCodes.map(c => String.fromCharCode(c));
  let asciiString = asciiChars.reduce((c, n) => c + n);

  return asciiString;
}

module.exports = hexToAscii;
