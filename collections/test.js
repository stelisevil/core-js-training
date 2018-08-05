import {
  getEmployeeById,
  getEmployeesByDepartment,
  getEmployeesWithMissingData,
  getNonSensitiveInformation,
  calculateTotalSalary,
  organiseEmployeesByDepartment
} from '.'
import employees from './data.json';

describe('Final Test', () => {
  describe('getEmployeeById', () => {
    it('gets the correct employee by their id', () => {
      expect(getEmployeeById(1)).toEqual({
        "id": 1,
        "fistName": "Matthew",
        "lastName": "Tsinontas",
        "department": "Engineering",
        "contactNumber": "01611119090",
        "taxCode": "123AL",
        "salary": 38000
      });
      expect(getEmployeeById(2)).toEqual({
        "id": 2,
        "fistName": "Joe",
        "lastName": "Bloggs",
        "department": "Engineering",
        "contactNumber": "",
        "taxCode": "123AL",
        "salary": 42000
      });
    });
  });
  describe('getEmployeesByDepartment', () => {
    it('gets an array of employees by their department', () => {
      expect(getEmployeesByDepartment('Engineering')).toEqual([
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
      ]);
      expect(getEmployeesByDepartment('random')).toEqual([]);
    })
  });
  describe('getEmployeesWithMissingData', () => {
    it('returns an array of users with missing data', () => {
      expect(getEmployeesWithMissingData()).toEqual([
        {
          "id": 2,
          "fistName": "Joe",
          "lastName": "Bloggs",
          "department": "Engineering",
          "contactNumber": "",
          "taxCode": "123AL",
          "salary": 42000
        }
      ])
    });
  });
  describe('getNonSensitiveInformation', () => {
    it('returns an array of users without any sensitive info', () => {
      const users = getNonSensitiveInformation();
      users.forEach(user => {
        expect(Object.keys(user)).toEqual(['id', 'firstName', 'lastName', 'department']);
      })
    });
  });
  describe('calculateTotalSalary', () => {
    it('returns a number of the total salary for all employees', () => {
      expect(calculateTotalSalary()).toEqual(163000);
    });
  });
  describe('organiseEmployeesByDepartment', () => {
    it('returns an object of users sorted into department', () => {
      const userObj = organiseEmployeesByDepartment();
      expect(Object.keys(userObj)).toEqual(['Engineering', 'Audio', 'Accounting']);
      expect(userObj.Engineering).toHaveLength(2);
      expect(userObj.Audio).toHaveLength(1);
      expect(userObj.Accounting).toHaveLength(1);
    });
  });
});
