module.exports = hexToBase64;

/**
 * Converts a hexadecimal encoded string to base64 encoding.
 * 
 * @param {String} hex The hexadecimal encoded string to convert to base64.
 * @returns {String}
 */
function hexToBase64(hex) {
  // Break up the hex into its chars.
  // Then convert hexadecimal to ASCII.
  let base16Chars = breakUpHexadecimal(hex);
  let asciiCodes = base16Chars.map(c => new Number(`0x${c}`).valueOf());
  let asciiChars = asciiCodes.map(c => String.fromCharCode(c));
  let asciiString = asciiChars.reduce((c, n) => c + n);

  // Convert ASCII to base64.

  return Buffer.from(asciiString).toString('base64');
}

/**
 * Chunks the base16 string into a set of base16 characters.
 * 
 * @param {String} hex The hexadecimal string to chunk into base16 characters.
 * @returns {String[]}
 */
function breakUpHexadecimal(hex) {
  let chunks = [];
  let char;
  let chunk = '';

  // Break the hexadecimal string into
  // chunks of two, since hexadecimal is
  // always going to be represented in pairs.

  for (let i = 0; i < hex.length; i++) {

    char = hex[i];

    if (chunk.length === 0) {
      // No chars in the pair, so concat the first one.
      chunk += char;
    } else if (chunk.length === 1) {
      // There is one char in the pair, so concat the second one.
      chunk += char;

      // Now we have 2. We're done. Push and reset.
      chunks.push(chunk);
      chunk = '';
    }

  }

  return chunks;
}