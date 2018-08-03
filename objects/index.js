/*
  Object basics

  In this file you will find functions used to assert your understanding of the
  basics around objects

  Each function has a corrisponsing test in the ./test.js file for you to read
  Don't worry too much about the test suite if it doesn't make sense, that comes
  in time

  Above each function I have written a small description about what I want that
  function to do

  In case you need a refresher, here is what an object looks like, note the {}
  bracket notation, the : after a key (which is camelCased) and the comma after
  a value to note the end of that key:value pair

    const obj = {
      key: 'value',
      anotherKey: 'another-value',
      age: 12,
      property: true
    };

  Objects are perhaps the one data type you will deal with the most once you
  get into React so its important you understand them well

  You may see the phraes key and property used interchangeably when discussing
  objects, they both mean the same thing

  Anyway... onto the test
*/

/*
  I expect this function to return true if obj is an object
    ...be careful with this one... ;)
*/
export const isObject = (obj) => {
  return (typeof obj === "object" && !Array.isArray(obj) && obj !== null);
}

/*
  I expect this function to return the firstName property of the object
  If the property firstName doesn't exist on the object, return false
*/
export const getFirstName = (obj) => {
  return obj.firstName || false;
}

/*
  I expect this function to return whichever key is passed in from the
    object. Fail gracefully if not found
*/
export const getKeyFromObject = (obj, key) => {
  return obj[key] || false;
}

/*
  I expect this function to return me an array of the objects keys
*/
export const getObjectKeys = (obj) => {
  return Object.keys(obj);
}

/*
  I expect this function to return me an array of the objects values
*/
export const getObjectValues = (obj) => {
  return Object.values(obj);
}

/*
  I expect this function to join the 2 objects together, returning a single
    object which contains properties from both.
  If objB has a property which is the same as a property of objA, then objB
   should take priority; as you're copying B into A
*/
export const joinObjects = (objA, objB) => {
  return Object.assign(objA, objB);
}

/*
  I expect this function to add a isObject property onto the object passed in:
  isObject should also be set to true
*/
export const addIsObjectProperty = (obj) => {
  const isObj = {
    isObject: true
  };
  return Object.assign(obj, isObj);
}
