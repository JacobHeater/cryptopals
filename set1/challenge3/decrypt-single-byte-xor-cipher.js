const {
    hexToBuffer,
    scoreKeys
} = require('../helpers');

/**
 * Returns a plain text string from the given
 * XORd code by finding what the cipher key
 * was for the XOR.
 * 
 * @param {String} hex Hex encoded string.
 * @returns {String}
 */
function decryptSingleByteXORCipher(hex) {
    let buff = hexToBuffer(hex);
    let byteArr = Array.from(buff);
    let scored = scoreKeys(hex);
    let key = scored[0];
    let charCode = hexKeyToAsciiCharCode(key);

    let plainText = byteArr.map(b => b ^ charCode)
        .filter(b => b >= 32 && b <= 126)
        .map(b => String.fromCharCode(b))
        .join('');

    return plainText;
}

/**
 * Returns an ASCII character code from the
 * given hexadecimal char.
 * 
 * @param {String} hex Hex encoded character.
 * @returns {Number}
 */
function hexKeyToAsciiCharCode(hex) {
    let base16 = 16;
    let asciiCode = parseInt(hex, base16);
    let asciiChar = String.fromCharCode(asciiCode).toUpperCase();

    return asciiChar.charCodeAt(0);
}

module.exports = decryptSingleByteXORCipher;
