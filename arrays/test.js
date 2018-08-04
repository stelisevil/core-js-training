import {
  isArray,
  returnNewArray,
  arrayItemCount,
  getFirstItem,
  getItemFromIndex,
  doesItemExistInArray,
  getIndexOfItem,
  addItemToEndOfArray,
  addItemToStartOfArray,
  addItemIntoIndex,
  removeSingleItemFromIndex,
  joinTwoArrays,
  findFirstOddNumber,
  doubleEveryNumber,
  filterOutOddNumbers,
  isEveryNumberOdd,
  addAllNumbersTogether,
  numericallySortItems
} from '.';

// DONT CHANGE THESE!! It will cause tests to fail which might be correct
// If you want to make a new test case, create a new array with the items you
// want to test with
const numbers = [4, 6, 9, 1, 2, 3];
const odd = [1, 3, 5, 7];


describe('Array test', () => {
  describe('isArray', () => {
    it('returns true if item is array', () => {
      expect(isArray([])).toEqual(true);
    });
    it('returns false if item is not an array', () => {
      expect(isArray({})).toEqual(false);
      expect(isArray(null)).toEqual(false);
      expect(isArray(false)).toEqual(false);
      expect(isArray()).toEqual(false);
      expect(isArray("")).toEqual(false);
    });
  });
  describe('returnNewArray', () => {
    it('returns an empty array', () => {
      expect(returnNewArray()).toEqual([]);
    });
  });
  describe('arrayItemCount', () => {
    it('returns the correct count of the array', () => {
      expect(arrayItemCount(odd)).toEqual(4);
    });
  });
  describe('getFirstItem', () => {
    it('returns the first item in the array', () => {
      expect(getFirstItem(numbers)).toEqual(4);
      expect(getFirstItem(odd)).toEqual(1);
    });
  });
  describe('getItemFromIndex', () => {
    it('gets the item from the specified index', () => {
      expect(getItemFromIndex(numbers, 2)).toEqual(9);
      expect(getItemFromIndex(odd, 2)).toEqual(5);
    });
  });
  describe('doesItemExistInArray', () => {
    it('returns true if the item exists', () => {
      expect(doesItemExistInArray(odd, 3)).toEqual(true);
      expect(doesItemExistInArray(numbers, 4)).toEqual(true);
    });
    it('returns false if the item doesnt exist in the array', () => {
      expect(doesItemExistInArray(odd, 2)).toEqual(false);
      expect(doesItemExistInArray(numbers, 10)).toEqual(false);
    });
  });
  describe('getIndexOfItem', () => {
    it('returns the index of the item', () => {
      
    });
  });
  describe('addItemToEndOfArray', () => {});
  describe('addItemToStartOfArray', () => {});
  describe('addItemIntoIndex', () => {});
  describe('removeSingleItemFromIndex', () => {});
  describe('joinTwoArrays', () => {});
  describe('findFirstOddNumber', () => {});
  describe('doubleEveryNumber', () => {});
  describe('filterOutOddNumbers', () => {});
  describe('isEveryNumberOdd', () => {});
  describe('addAllNumbersTogether', () => {});
  describe('numericallySortItems', () => {});
});
