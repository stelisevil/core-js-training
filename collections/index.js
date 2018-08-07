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
// export const getEmployeeById = (id) => {
//   // created an empty object to insert data into
//   let employee = {};
//   // using a for loop to index through each of the employees on record
//   for (let i = 0; i < employees.length; i++) {
//     // in each of the iterations, if the employee property 'id' matches the
//     // provided arguement 'id', the statement is true...
//     if (employees[i].id === id) {
//       // ... and the following code is executed:
//       // this assigns the employees details matching their id to the
//       // variable 'employee'
//       employee = employees[i];
//     }
//   }
//   // this returns the employee details as the result of the function.
//   return employee;
// }

// much nicer :) wouldnt surprise me if you told me i could make it cleaner
export const getEmployeeById = (id) => {
  // returns the first value that satisfies the function in .find()
  return employees.find(function(employee) {
    // the if statement: if the employee id matches that which was provided,
    // this returns the value (i.e. the employee object) of that id
    if (employee.id === id) {
      return employee;
    }
  });
}



/*
  I expect this function to return me an array of employees depending on which
  department is passed in
*/
// export const getEmployeesByDepartment = (dept) => {
//   // sets an empty array ready to accept any values we add later:
//   const departmentEmployees = [];
//   // using a for loop to index through each of the employees on record
//   for (let i = 0; i < employees.length; i++) {
//     // in each of the iterations, if the employee 'department' matches the
//     // provided arguement 'dept', the statement is true...
//     if (employees[i].department === dept) {
//       // this adds (pushes) the employees details to the departmentEmployees
//       // array we created earlier.
//       departmentEmployees.push(employees[i]);
//     }
//   }
//   // returns all employees that match the department or an empty array if
//   // there were no matches.
//   return departmentEmployees;
//   // side note: i wrote this completely before testing and it worked first time!
// }

export const getEmployeesByDepartment = (dept) => {
  // returns an array with all the values that satisfy the
  // function within .filter().
  return employees.filter(function(employee) {
    // if the employee department value matches the dept arguement provided,
    // this pushes every value into an array and returns that array.
    if (employee.department === dept) {
      return employee;
    }
  });
} // i literally bashed these both out in ~ 2 minutes. The discord call from
// earlier was very helpful :)

/*
  I expect this function to look through all the employees and return an array
  of employees who are missing any data
*/

// export const getEmployeesWithMissingData1 = () => {
//   // sets an empty array ready to accept any values we add later:
//   const missingInfoEmployees = [];
//   // using a for loop to index through each of the employees on record
//   for (let i = 0; i < employees.length; i++) {
//     // checks if any of the values are empty. I prefer this method over others
//     // I thought of because if more than one value is empty per employee, this
//     // function only adds the employee to the array once.
//     if (employees[i].id === "" || employees[i].firstName === "" || employees[i].lastName === "" || employees[i].department === "" || employees[i].contactNumber === "" || employees[i].taxCode === "" || employees[i].salary === "") {
//       // this adds (pushes) the employees details to the missingInfoEmployees
//       // array we created earlier.
//       missingInfoEmployees.push(employees[i]);
//     }
//   }
//   // returns all employees that are missing data
//   return missingInfoEmployees;
// }

// I thought of a 2nd way of doing this which is probably better but might
// need some tidying up.

// export const getEmployeesWithMissingData = () => {
//   // sets an empty array ready to accept any values we add later:
//   const missingInfoEmployees = [];
//   // using a for loop to index through each of the employees on record
//   for (let i = 0; i < employees.length; i++) {
//     // creates an array of the employee details
//     let employeeDetails = Object.values(employees[i])
//     // checks each value in the new array for any empty strings or undefined
//     employeeDetails.find(function(item) {
//       if (item === "" || item === undefined) {
//         // adds the employee to the missingInfoEmployees array
//         missingInfoEmployees.push(employees[i]);
//       }
//     })
//   }
//   // returns all employees that are missing data
//   return missingInfoEmployees;
// }

// I tidied this one up a bit as well using the discord call from earlier
// plus a couple of the amended methods above.

// Method 1 --

// export const getEmployeesWithMissingData = () => {
//   return employees.filter(function(employee) {
//     let empDet = Object.values(employee);
//     if (empDet.includes("") || empDet.includes(undefined)) {
//       return employee;
//     }
//   });
// }

// I then wondered if it was possible to clean it up further and get rid of
// a line, so i gave it a try.

// Method 2 --

export const getEmployeesWithMissingData = () => {
  // returns an array with all the values that satisfy the function
  // inside .filter()
  return employees.filter(function(employee) {
    // Object.values(employee) creates a simple array of all the values
    // within each employee object. .includes("") checks if any of the
    // values within the array it is called upon contain an empty string ("")
    // or undefined, and if so, returns the employees details to the array
    if (Object.values(employee).includes("") || Object.values(employee).includes(undefined)) {
      return employee;
    }
  });
}

// would you use Method 1 or 2 in this situation? 1 is better for D.R.Y, but
// Method 2 has fewer lines? I feel as though if the if statement above had
// more than two conditions, it would make sense to use Method 1? Either way
// they both pass :)

/*
  I expect this functon to return me the employee list but with any sensitive
  information like personal phone numbers or salary and tax inforamtion
  stripped out
*/
export const getNonSensitiveInformation = () => {
  let sensitiveEmployees = employees.map(function(employee) {
    return {
      id: employee.id,
      fistName: employee.fistName,
      lastName: employee.lastName,
      department: employee.department
    };
  })
  return sensitiveEmployees;
}

/*
  I expect this function to return the total cost of all the employees salaries
*/
export const calculateTotalSalary = () => {
  return employees.reduce(function(currentTotal, employee) {
    return currentTotal + employee.salary;
  }, 0);
}

/*
  HARD!! (brownie points if you can pull this one off)

  I expect this function to take the employee list and return an object, where
  the key is the department, and the value is an array of all employees in that
  department
*/
export const organiseEmployeesByDepartment = () => {
  let departments = [];

  for (let i = 0; i < employees.length; i++) {
    let empDept = employees[i].department
    if (!departments.includes(empDept)) {
      departments.push(empDept);
    };
  }

  let employeeObject = {};

  departments.forEach(function(department) {
    employeeObject[department] = []
  });

  for (let i = 0; i < employees.length; i++) {
    let empDept = employees[i].department
    employeeObject[empDept].push(employees[i]);
  }

  return employeeObject;
}
