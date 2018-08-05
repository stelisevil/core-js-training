import {isOdd} from '../numbers';

/*
  Array basics

  In this file you will find functions used to assert your understanding of the
  basics around arrays

  Each function has a corrisponsing test in the ./test.js file for you to read
  Don't worry too much about the test suite if it doesn't make sense, that comes
  in time

  Above each function I have written a small description about what I want that
  function to do

  In case you need a refresher, here is what an array looks like, note the []
  bracket notation and the comma after a value to note the end of that value

    const fibboaci = [1, 1, 2, 3, 5, 8, 13];
*/

/*
  I expect this function to tell me if the argument arr is an array
*/
export const isArray = (arr) => {
  return Array.isArray(arr);
}

/*
  I expect this function to return me a new empty array
*/
export const returnNewArray = () => {
  return [];
}

/*
  I expect this function to tell me how many items are in the array
*/
export const arrayItemCount = (arr) => {
  return arr.length;
}

/*
  I expect this function to return me the first item in the array
*/
export const getFirstItem = (arr) => {
  return arr[0];
}

/*
  I expect this function to get me an item from the array based off the idx
  argument
*/
export const getItemFromIndex = (arr, idx) => {
  return arr[idx];
}

/*
  I expect this function to return true if the item exists in the array, false
  if it doesnt
*/
export const doesItemExistInArray = (arr, item) => {
  return arr.includes(item);
}

/*
  I expect this function to tell me the index of where the item sits inside the
  array
*/
export const getIndexOfItem = (arr, item) => {
  return arr.indexOf(item);
}

/*
  I expect this function to take the item and add it to the end of the array
*/
export const addItemToEndOfArray = (arr, item) => {
  arr.push(item);
  return arr;
}

/*
  I expect this function to take the item and add it to the start of the array
*/
export const addItemToStartOfArray = (arr, item) => {
  arr.unshift(item);
  return arr;
}

/*
  I expect this function to take an item and add it to the index of the array
*/
export const addItemIntoIndex = (arr, idx, item) => {
  arr.splice(idx, 0, item);
  return arr;
}

/*
  I expect this function to remove one item from the array at the provided
  index
*/
export const removeSingleItemFromIndex = (arr, idx) => {
  arr.splice(idx, 1);
  return arr;
}

/*
  I expect this function to join 2 arrays together
*/
export const joinTwoArrays = (arrA, arrB) => {
  return arrA.concat(arrB);
}

/*
  I expect this function to find the first odd number in the provided array
  ... remember, you have a function in your number test for checking if a
  number is odd ;)
*/
export const findFirstOddNumber = (arr) => {
  return arr.find(function(item) {
    return isOdd(item);
  });
}

/*
  I expect this function to take an array and double each number in the array
    e.g. arr = [1, 2, 3, 4], i expect [2, 4, 6, 8]
*/

// old method before learning shorter method
// export const doubleEveryNumber = (arr) => {
//   const doubledArray = [];
//   arr.forEach(function(item) {
//     doubledArray.push(item*2)
//   });
//   return doubledArray;
// }

export const doubleEveryNumber = (arr) => {
  return arr.map(function(item){
    return item*2;
  });
}
/*
  I expect this function to take an array of numbers, and return me an array
  with all the odd numbers filtered out, i.e. only contain the even numbers
*/


// export const filterOutOddNumbers = (arr) => {
//   const filteredArray = [];
//   arr.forEach(function(item) {
//     if (!isOdd(item)) {
//       filteredArray.push(item)
//     }
//   });
//   return filteredArray;
// }

export const filterOutOddNumbers = (arr) => {
  return arr.filter(function(item) {
      return !isOdd(item);
  })
}

// export const filterOutOddNumbers = (arr) => {
//   return arr.filter(!isOdd);
// }

/*
  I expect this function to return true if every number in the array is odd
*/
export const isEveryNumberOdd = (arr) => {
  return arr.every(isOdd);
}

/*
  I expect this function to take an array of numbers and return the sum of all
  the numbers
*/
export const addAllNumbersTogether = (arr) => {
  return arr.reduce(function(previous, current) {
    return previous + current;
  }, 0)
}

/*
  I expect this function to take an array of numbers and sort them in numerical
  order
*/
export const numericallySortItems = (arr) => {
  arr.sort(function(a,b) {
    return a - b;
  });
  return arr;
}
