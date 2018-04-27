const {
    hexToAscii
} = require('../../set1/helpers');

describe('Tests hexToAscii function.', () => {

    it('Should convert a hexadecimal string to an ASCII string', () => {
        const hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
        const ascii = hexToAscii(hex);
        const expected = `I'm killing your brain like a poisonous mushroom`;

        expect(ascii).not.toEqual(hex);
        expect(ascii).toEqual(expected);
    });

});
