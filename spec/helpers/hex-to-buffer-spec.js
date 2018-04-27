const {
    hexToBuffer
} = require('../../set1/helpers');

describe('Tests hexToBuffer function.', () => {

    it('Should convert a hexadecimal string to an ASCII buffer', () => {
      const hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
      const expected = true;
      const buffer = hexToBuffer(hex);    
      const actual = buffer instanceof Buffer;

      expect(buffer).toBeDefined();
      expect(actual).toEqual(expected);
    });

});
