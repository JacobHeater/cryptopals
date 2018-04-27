const findAndDecryptStringInLines = require('../../../set1/challenge4/find-decrypt-string');
const fs = require('fs');
const content = fs.readFileSync('./assets/set1/challenge4/input.txt').toString();
const lines = content.split(/\n/g);

describe('Set 1 Challenge 4 Tests', () => {

  it('Should find the encrypted string in the file lines', () => {

    const plainText = findAndDecryptStringInLines(lines);

    console.log(plainText);

  });

});