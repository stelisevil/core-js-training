import employees from './data.json';

/*
  Collections a.k.a the final test

  This file will be the final test for the core-js training.

  Collections are another word for what is perhaps the most common set of data
  you will find yourself working with in JS.

  A collection is an array of objects

  When you make a request to a server for data, simple data can be returned in
  a single level array or simple object but more complicated data sets will
  usually be in this format.

  This test will be a culmination of everything you have learned so far

  If you have modules in the other tests you can use to make these tests simpler
  go for it - that's the whole notion of functional programming

  The format for this test will be slightly different - the data that I will
  be using for the test suite lives in ./data.json. I have written you an 
  import statement and you should use these data sets for the test.
*/

/*
  I expect this function to get me an employee by their ID
*/
export const getEmployeeById = (id) => {

}

/*
  I expect this function to return me an array of employees depending on which
  department is passed in
*/
export const getEmployeesByDepartment = (dept) => {

}

/*
  I expect this function to look through all the employees and return an array
  of employees who are missing any data
*/
export const getEmployeesWithMissingData = () => {

}

/*
  I expect this functon to return me the employee list but with any sensitive
  information like personal phone numbers or salary inforamtion stripped out
*/
export const getNonSensitiveInformation = () => {

}

/*
  I expect this function to return the total cost of all the employees salaries
*/
export const calculateTotalSalary = () => {

}

/*
  HARD!! (brownie points if you can pull this one off)

  I expect this function to take the employee list and return an object, where
  the key is the department, and the value is an array of all employees in that
  department
*/
export const organiseEmployeesByDepartment = () => {

}
