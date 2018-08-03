import {
  amNumber,
  add,
  subtract,
  multiply,
  divide,
  isOdd,
  round,
  roundUp,
  roundDown,
  convertToNumber,
  convertToInt,
  variableDecimalPlace
} from '.';

xdescribe('Number test', () => {
  describe('amNumber', () => {
    it('returns true if the value is a number', () => {
      expect(amNumber(0)).toEqual(true);
      expect(amNumber(17.3)).toEqual(true);
      expect(amNumber(-11)).toEqual(true);
    });
    it('returns false if the value isnt a number', () => {
      expect(amNumber(false)).toEqual(false);
      expect(amNumber([])).toEqual(false);
      expect(amNumber(null)).toEqual(false);
      expect(amNumber()).toEqual(false);
      expect(amNumber('0')).toEqual(false);
    });
  });
  describe('add', () => {
    it('adds 2 numbers together', () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(3.4, 1.9)).toEqual(5.3)
    });
  });
  describe('subtract', () => {
    it('subtracts the 2 numbers togetger', () => {
      expect(subtract(2, 3)).toEqual(-1);
      expect(subtract(2, -3)).toEqual(5);
      expect(subtract(-11, -23)).toEqual(12);
    });
  });
  describe('multiply', () => {
    it('multiplies the 2 numbers together', () => {
      expect(multiply(1, 2)).toEqual(2);
      expect(multiply(7, -3)).toEqual(-21);
      expect(multiply(0, 1)).toEqual(0);
    });
  });
  describe('divide', () => {
    it('divides the 2 numbers together', () => {
      expect(divide(1, 2)).toEqual(0.5);
      expect(divide(0, 5)).toEqual(0);
    });
    it('fails gracefully if trying to divide by 0', () => {
      expect(divide(5, 0)).toEqual(false);
    });
  });
  describe('round', () => {
    it('rounds to the nearest int', () => {
      expect(round(7.2)).toEqual(7);
      expect(round(-1.2)).toEqual(-1);
      expect(round(0.51)).toEqual(1);
    });
  });
  describe('roundUp', () => {
    it('rounds up to the next int', () => {
      expect(roundUp(1.1)).toEqual(2);
      expect(roundUp(-11.9)).toEqual(-11);
      expect(roundUp(0)).toEqual(0);
    });
  })
  describe('roundDown', () => {
    it('rounds down to the next int', () => {
      expect(roundDown(1.1)).toEqual(1);
      expect(roundDown(-11.9)).toEqual(-12);
      expect(roundDown(0)).toEqual(0);
    });
  })
  describe('convertToInt', () => {
    it('converts to an integer', () => {
      expect(convertToInt('123.2')).toEqual(123);
      expect(convertToInt('-11.2')).toEqual(-11);
    });
    it('fails gracefully if cannot be converted to an int', () => {
      expect(convertToInt('hello')).toEqual(false);
      expect(convertToInt({})).toEqual(false);
      expect(convertToInt([])).toEqual(false);
      expect(convertToInt()).toEqual(false);
    });
  });
  describe('isOdd', () => {
    it('returns true if the number is odd', () => {
      expect(isOdd(1)).toEqual(true);
      expect(isOdd(11)).toEqual(true);
    });
    it('returns false if the number is even', () => {
      expect(isOdd(2)).toEqual(false);
      expect(isOdd(10)).toEqual(false)
    });
  });
  describe('variableDecimalPlace', () => {
    it('converst to the correct number of decimal places', () => {
      expect(variableDecimalPlace('93.48', 1)).toEqual(93.5);
      expect(variableDecimalPlace('103.93302', 4)).toEqual(103.9330);
    });
  });
});
