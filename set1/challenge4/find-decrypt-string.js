const {
  hexToAscii,
  scoreKeys
} = require('../helpers');

const decryptSingleByteXORCipher = require('../challenge3/decrypt-single-byte-xor-cipher');


/**
 * Searches through a set of hexadecimal lines and
 * identifies the encrypted string, and decrypts
 * it using the single byte XOR decryption
 * strategy form S1C3.
 * 
 * @param {String[]} lines The lines to search through.
 * @return {String}
 */
function findAndDecryptStringInLines(lines) {

  let max = -1;
  let cipher = '';

  for (let line of lines) {

    let score = scoreKeys(line);

    if (score[0].count >= max) {
      max = score[0].count;
      cipher = line;
    }

  }
  
  return decryptSingleByteXORCipher(cipher);

}

module.exports = findAndDecryptStringInLines;
