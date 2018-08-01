/*
  String basics

  In this file you will find functions used to assert your understanding of the
  basics around strings

  Each function has a corrisponsing test in the ./test.js file for you to read
  Don't worry too much about the test suite if it doesn't make sense, that comes
  in time

  Above each function I have written a small description about what I want that
  function to do
*/

/*
  amString

  I expect this function to return true if the argument str is a string, otherwise
  it should return false
*/
export const amString = (str) => {
  return typeof(str) === 'string';
}

/*
  howLong

  I expect this function to return an int value for how long the string is
*/
export const howLong = (str) => {
  return str.length;
}

/*
  join

  I expect this function to join the strings a and b together
*/
export const join = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a+b;
  } else {
    let convertA = String(a);
    let convertB = String(b);
    return convertA+convertB;
  }
}

/*
  characterExists

  I expect this function to return true if the char argument exists in the string
*/
export const characterExists = (string, char) => {
  return string.includes(char);
};

/*
  whereIsCharacter

  I expect this function to return the location of the first instance of a
  character in a string
*/
export const whereIsCharacter = (string, char) => {
  if (string.indexOf(char) === -1) {
    return false
  } else {
    return string.indexOf(char);
  }
}

/*
  removeSpaces

  I expect this string to remove the spaces from a string
*/
export const removeSpaces = (string) => {
  return string.trim().replace(' ','');
}

// Note: characterExists, whereIsCharacter worked first time!
