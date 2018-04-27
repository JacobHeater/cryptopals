const breakUpHexadecimal = require('./break-up-hex');

/**
 * Scores a possible list of cipher keys
 * by ranking it by order of occurrence.
 * 
 * @param {String} hex The hex to score.
 * @returns {String[]}
 */
function scoreKeys(hex) {
    const broken = breakUpHexadecimal(hex);
    const map = {};

    for (let key of broken) {
        if (!map[key]) {
            map[key] = {
                key: key,
                count: 1
            };
        } else {
            map[key].count++;
        }
    }

    return Object.keys(map)
        .map(k => map[k])
        .sort((a, b) => b.count - a.count)
        .map(k => k.key);
}

module.exports = scoreKeys;
