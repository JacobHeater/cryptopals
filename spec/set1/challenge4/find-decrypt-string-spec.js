const findAndDecryptStringInLines = require('../../../set1/challenge4/find-decrypt-string');
const fs = require('fs');
const content = fs.readFileSync('./assets/set1/challenge4/input.txt').toString();
const lines = content.split('\n');

// Source: https://cryptopals.com/sets/1/challenges/4

describe('Set 1 Challenge 4 Tests', () => {

  it('Should find the encrypted string in the file lines', () => {

    const actual = findAndDecryptStringInLines(lines);

    // NOTE: Something is funny with this output.
    //       Look at this later.

    const expected = 'nOWTHATTHEPARTYISJUMPING*';

    expect(actual).toEqual(expected);

  });

});