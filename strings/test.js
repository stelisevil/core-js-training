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

  xdescribe('howLong', () => {
    it('should return the correct int for the size of the string', () => {
      expect(howLong('hello')).toEqual(5);
      expect(howLong('')).toEqual(0);
      expect(howLong('a')).toEqual(1);
      expect(howLong('hello world')).toEqual(11);
    });
  });

  xdescribe('join', () => {
    it('should join the 2 strings together', () => {
      expect(join('hello ' ,'there')).toEqual('hello there');
    });
  });

  xdescribe('characterExists', () => {
    it('should return true if the character exists in the string', () => {
      expect(characterExists('hello', 'h')).toEqual(true);
    });
    it('should return false if the character doesnt exist in the string', () => {
      expect(characterExists('hello', 'x')).toEqual(false);
    });
  });

  xdescribe('whereIsCharacter', () => {
    it('should return an int value for the location of the character in the string', () => {
      expect(whereIsCharacter('hello', 'e')).toEqual(1);
    });
  });

  xdescribe('removeSpaces', () => {
    it('should remove the spaces from a string', () => {
      expect(removeSpaces('hello there')).toEqual('hellothere')
    });
  });
});
