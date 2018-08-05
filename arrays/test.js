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

describe('Array test', () => {
  let odd;
  let numbers;
  beforeEach(() => {
    // DONT CHANGE THESE!! It will cause tests to fail which might be correct
    // If you want to make a new test case, create a new array with the items you
    // want to test with
    numbers = [4, 6, 9, 1, 2, 3];
    odd = [1, 3, 5, 7];
  });
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
      expect(getIndexOfItem(odd, 3)).toEqual(1);
      expect(getIndexOfItem(numbers, 3)).toEqual(5);
    });
  });
  describe('addItemToEndOfArray', () => {
    it('adds an item to the end of the array', () => {
      expect(addItemToEndOfArray(odd, 9)).toEqual([1, 3, 5, 7, 9]);
    });
  });
  describe('addItemToStartOfArray', () => {
    it('adds an item to the start of the array', () => {
      expect(addItemToStartOfArray(numbers, 100)).toEqual([100, 4, 6, 9, 1, 2, 3]);
    });
  });
  describe('addItemIntoIndex', () => {
    it('adds an item into the array at the correct index', () => {
      expect(addItemIntoIndex(numbers, 2, 100)).toEqual([4, 6, 100, 9, 1, 2, 3])
    });
  });
  describe('removeSingleItemFromIndex', () => {
    it('removes an item from the selected index', () => {
      expect(removeSingleItemFromIndex(odd, 2)).toEqual([1, 3, 7]);
    });
  });
  describe('joinTwoArrays', () => {
    it('joins the two arrays', () => {
      expect(joinTwoArrays(odd, numbers)).toEqual([1, 3, 5, 7, 4, 6, 9, 1, 2, 3])
    });
  });
  describe('findFirstOddNumber', () => {
    it('finds the first odd number in the array', () => {
      expect(findFirstOddNumber(odd)).toEqual(1);
      expect(findFirstOddNumber(numbers)).toEqual(9);
    });
  });
  describe('doubleEveryNumber', () => {
    it('returns an array with the number doubled', () => {
      expect(doubleEveryNumber(odd)).toEqual([2, 6, 10, 14]);
      expect(doubleEveryNumber(numbers)).toEqual([8, 12, 18, 2, 4, 6 ]);
    });
  });
  describe('filterOutOddNumbers', () => {
    it('returns an array with the odd numbers filtered out', () => {
      expect(filterOutOddNumbers(numbers)).toEqual([4, 6, 2]);
      expect(filterOutOddNumbers(odd)).toEqual([]);
    });
  });
  describe('isEveryNumberOdd', () => {
    it('returns true if every number is odd', () => {
      expect(isEveryNumberOdd(odd)).toEqual(true)
    });
    it('returns false if every number isnt odd', () => {
      expect(isEveryNumberOdd(numbers)).toEqual(false);
    });
  });
  describe('addAllNumbersTogether', () => {
    it('adds all the numbers of the array together', () => {
      expect(addAllNumbersTogether(odd)).toEqual(16);
      expect(addAllNumbersTogether(numbers)).toEqual(25);
    });
  });
  describe('numericallySortItems', () => {
    it('sorts the numbers in numerical order', () => {
      expect(numericallySortItems(odd)).toEqual(odd);
      expect(numericallySortItems(numbers)).toEqual([1, 2, 3, 4, 6, 9])
    });
  });
});
