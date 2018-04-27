const {
    breakUpHexadecimal
} = require('../../set1/helpers');

describe('Tests breakUpHex function.', () => {

    it('Should break up a hexadecimal string into chunks of two characters', () => {
        const hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
        const expected = hex.length / 2;
        const broken = breakUpHexadecimal(hex);
        const actual = broken.length;

        expect(actual).toEqual(expected);
    });

});
