/*
  Number basics

  In this file you will find functions used to assert your understanding of the
  basics around numbers

  Each function has a corrisponsing test in the ./test.js file for you to read
  Don't worry too much about the test suite if it doesn't make sense, that comes
  in time

  Above each function I have written a small description about what I want that
  function to do
*/


/*
  I expect this function to tell me if variable num is a number
*/
export const amNumber = (num) => {
  return typeof(num) === 'number';
}

/*
  I expect this function to return me the sum of a and b
*/
export const add = (a, b) => {
  return a + b;
}

/*
  I expect this function to subtract a and b
*/
export const subtract = (a, b) => {
  return a - b;
}

/*
  I expect this function to multiple a and b
*/
export const multiply = (a, b) => {
  return a * b;
}

/*
  I expect this function to divide a and b
  I also expect this function to fail gracefully if a user attempts to
    divide by 0 (i.e. return false)
*/
export const divide = (a, b) => {
  if (b === 0) {
    return false;
  }
  return a / b;
}

/*
  I expect this function round me to the nearest int
*/
export const round = (num) => {
  return Math.round(num);
}

/*
  I expect this function to round up to the nearest int
*/
export const roundUp = (num) => {
  return Math.ceil(num);
}

/*
  I expect this function to round down to the nearest int
*/
export const roundDown = (num) => {
  return Math.floor(num);
}

/*
  I expect this function to convert a string into an integer
    e.g. "22.23" => 22
  I expect this function to also fail gracefully if the argument cant be
  converted to a number
*/
export const convertToInt = (str) => {
  if (Number.isNaN(Number(str)) || typeof str !== 'string') {
    return false;
  }
  return Math.round(Number(str)); // this took me by far the longest
}

/*
  I expect this function to return true if a number is odd, false if it is even
*/
export const isOdd = (num) => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
}

/*
  I expect this function to take the numnber and round it to the decmials
  provided by the decimals argument
*/
export const variableDecimalPlace = (num, decimals) => {
  return Number(parseFloat(num).toFixed(decimals));
}
