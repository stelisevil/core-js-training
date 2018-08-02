import {
  amString,
  join,
  howLong,
  characterExists,
  whereIsCharacter,
  removeSpaces
} from '.';

describe('Strings - basics', () => {

  describe('amString', () => {
    it('should return true if the argument is a string', () => {
      expect(amString('hello')).toEqual(true);
    });
    it('should return false if the argument is not a string', () => {
      expect(amString(0)).toEqual(false);
      expect(amString({})).toEqual(false);
      expect(amString([])).toEqual(false);
      expect(amString(null)).toEqual(false);
      expect(amString(undefined)).toEqual(false);
    });
  });

  describe('howLong', () => {
    it('should return the correct int for the size of the string', () => {
      expect(howLong('hello')).toEqual(5);
      expect(howLong('')).toEqual(0);
      expect(howLong('a')).toEqual(1);
      expect(howLong('hello world')).toEqual(11);
    });
  });

  describe('join', () => {
    it('should join the 2 strings together', () => {
      expect(join('hello ' ,'there')).toEqual('hello there');
      expect(join(1,2)).toEqual("12"); // Could potentially test for arrays too?
    });
  });

  describe('characterExists', () => {
    it('should return true if the character exists in the string', () => {
      expect(characterExists('hello', 'h')).toEqual(true);
    });
    it('should return false if the character doesnt exist in the string', () => {
      expect(characterExists('hello', 'x')).toEqual(false);
    });
  });

  describe('whereIsCharacter', () => {
    it('should return an int value for the location of the character in the string', () => {
      expect(whereIsCharacter('hello', 'e')).toEqual(1);
    });
    it('should return false if the character doesn\'t exist in the string', () => {
      expect(whereIsCharacter('hello', 'f')).toEqual(false);
    });
  });

  describe('removeSpaces', () => {
    it('should remove the spaces from a string', () => {
      expect(removeSpaces('hello there')).toEqual('hellothere')
      expect(removeSpaces('hellothere')).toEqual('hellothere') // added to test if it passes with no spaces to remove
      expect(removeSpaces('  hello there  ')).toEqual('hellothere') // original test failed so I ammended the function to remove spaces at the start and end of the string.
    });
  });
});
