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
export const howManyEmployees = () => {
  return employees.length;
}

/*
  I expect this function to get me an employee by their ID
*/
export const getEmployeeById = (id) => {
  // created an empty object to insert data into
  var employeeNumber = {};
  // using a for loop to index through each of the employees on record
  for (let employeeNumberIndex = 0; employeeNumberIndex < employees.length; employeeNumberIndex++) {
    // in each of the iterations, if the employee property 'id' matches the
    // provided arguement 'id', the statement is true...
    if (employees[employeeNumberIndex].id === id) {
      // ... and the following code is executed:
      // this assigns the employees details matching their id to the
      // variable 'employeeNumber'
      employeeNumber = employees[employeeNumberIndex];
    }
  }
  // this returns the employee details as the result of the function.
  return employeeNumber;
}

/*
  I expect this function to return me an array of employees depending on which
  department is passed in
*/
export const getEmployeesByDepartment = (dept) => {
  // sets an empty array ready to accept any values we add later:
  var departmentEmployees = [];
  // using a for loop to index through each of the employees on record
  for (let employeeNumberIndex = 0; employeeNumberIndex < employees.length; employeeNumberIndex++) {
    // in each of the iterations, if the employee 'department' matches the
    // provided arguement 'dept', the statement is true...
    if (employees[employeeNumberIndex].department === dept) {
      // this adds (pushes) the employees details to the departmentEmployees
      // array we created earlier.
      departmentEmployees.push(employees[employeeNumberIndex]);
    }
  }
  // returns all employees that match the department or an empty array if
  // there were no matches.
  return departmentEmployees;
  // side note: i wrote this completely before testing and it worked first time!
}

/*
  I expect this function to look through all the employees and return an array
  of employees who are missing any data
*/

export const getEmployeesWithMissingData1 = () => {
  // sets an empty array ready to accept any values we add later:
  var missingInfoEmployees = [];
  // using a for loop to index through each of the employees on record
  for (let employeeNumberIndex = 0; employeeNumberIndex < employees.length; employeeNumberIndex++) {
    // checks if any of the values are empty. I prefer this method over others
    // I thought of because if more than one value is empty per employee, this
    // function only adds the employee to the array once.
    if (employees[employeeNumberIndex].id === "" || employees[employeeNumberIndex].firstName === "" || employees[employeeNumberIndex].lastName === "" || employees[employeeNumberIndex].department === "" || employees[employeeNumberIndex].contactNumber === "" || employees[employeeNumberIndex].taxCode === "" || employees[employeeNumberIndex].salary === "") {
      // this adds (pushes) the employees details to the missingInfoEmployees
      // array we created earlier.
      missingInfoEmployees.push(employees[employeeNumberIndex]);
    }
  }
  // returns all employees that are missing data
  return missingInfoEmployees;
}

// I thought of a 2nd way of doing this which is probably better but might
// need some tidying up.

export const getEmployeesWithMissingData = () => {
  // sets an empty array ready to accept any values we add later:
  var missingInfoEmployees = [];
  // using a for loop to index through each of the employees on record
  for (let employeeNumberIndex = 0; employeeNumberIndex < employees.length; employeeNumberIndex++) {
    // creates an array of the employee details
    let employeeDetails = Object.values(employees[employeeNumberIndex])
    // checks each value in the new array for any empty strings
    employeeDetails.find(function(item) {
      if (item === "") {
        // adds the employee to the missingInfoEmployees array
        missingInfoEmployees.push(employees[employeeNumberIndex]);
      }
    })
  }
  // returns all employees that are missing data
  return missingInfoEmployees;
}

/*
  I expect this functon to return me the employee list but with any sensitive
  information like personal phone numbers or salary and tax inforamtion
  stripped out
*/
export const getNonSensitiveInformation = () => {
  // using a for loop to index through each of the employees on record
  for (let employeeNumberIndex = 0; employeeNumberIndex < employees.length; employeeNumberIndex++) {
    // deletes the 3 sensitive key/value pairs from the employee records
    delete employees[employeeNumberIndex].contactNumber;
    delete employees[employeeNumberIndex].taxCode;
    delete employees[employeeNumberIndex].salary;
  }
  // returns the ammended array with sensitive info removed. 
  return employees;
}

/*
  I expect this function to return the total cost of all the employees salaries
*/
export const calculateTotalSalary = () => {
  var individualSalaries = [];
  for (let employeeNumberIndex = 0; employeeNumberIndex < employees.length; employeeNumberIndex++) {
    individualSalaries.push(employees[employeeNumberIndex].salary);
  }
  return individualSalaries.reduce(function(previous, current) {
    return previous + current;
  }, 0)
}

/*
  HARD!! (brownie points if you can pull this one off)

  I expect this function to take the employee list and return an object, where
  the key is the department, and the value is an array of all employees in that
  department
*/
export const organiseEmployeesByDepartment = () => {

}

const employeeObject = {
  Engineering: [
    {
      "id": 1,
      "fistName": "Matthew",
      "lastName": "Tsinontas",
      "department": "Engineering",
      "contactNumber": "01611119090",
      "taxCode": "123AL",
      "salary": 38000
    },
    {
      "id": 2,
      "fistName": "Joe",
      "lastName": "Bloggs",
      "department": "Engineering",
      "contactNumber": "",
      "taxCode": "123AL",
      "salary": 42000
    }
  ],
  Audio: [
    {
      "id": 3,
      "fistName": "Stevie",
      "lastName": "Wonder",
      "department": "Audio",
      "contactNumber": "01338940929",
      "taxCode": "108LT",
      "salary": 28000
    }
  ],
  Accounting: [
    {
      "id": 4,
      "fistName": "Joe",
      "lastName": "Davidson",
      "department": "Accounting",
      "contactNumber": "02289380291",
      "taxCode": "129BT",
      "salary": 55000
    }
  ]
}
