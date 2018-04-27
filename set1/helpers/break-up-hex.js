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

module.exports = breakUpHexadecimal;
