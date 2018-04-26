const hexToAscii = require('./hex-to-ascii');

/**
 * Converts a hexadecimal encoded string to a Buffer of ASCII-encoded bytes.
 * 
 * @param {String} hex The hexadecimal encoded string.
 * @returns {Buffer}
 */
function hexToBuffer(hex) {
  let ascii = hexToAscii(hex);
  let buffer = Buffer.from(ascii);

  return buffer;
}

module.exports = hexToBuffer;