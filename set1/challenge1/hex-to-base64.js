const { hexToAscii } = require('../helpers');

/**
 * Converts a hexadecimal encoded string to base64 encoding.
 * 
 * @param {String} hex The hexadecimal encoded string to convert to base64.
 * @returns {String}
 */
function hexToBase64(hex) {
  let asciiString = hexToAscii(hex);

  // Convert ASCII to base64.

  return Buffer.from(asciiString).toString('base64');
}

module.exports = hexToBase64;
