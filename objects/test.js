import {
  isObject,
  getFirstName,
  getKeyFromObject,
  getObjectKeys,
  getObjectValues,
  joinObjects,
  addIsObjectProperty
} from '.';

const user = {
  firstName: 'Matthew',
  lastName: 'Tsinontas',
  email: 'matthew@gmail.com'
};

const address = {
  address1: 'Apartment 2003',
  address2: '100 West Street'
};

describe('Object test', () => {
  describe('isObject', () => {
    it('returns true if an object', () => {
      expect(isObject({})).toEqual(true);
    });
    it('returns false if not an object', () => {
      expect(isObject()).toEqual(false);
      expect(isObject('hello')).toEqual(false);
      expect(isObject(true)).toEqual(false);
      expect(isObject(0)).toEqual(false);
      expect(isObject([])).toEqual(false);
      expect(isObject(null)).toEqual(false);
    });
  });
  describe('getFirstName', () => {
    it('returns the firstName property if it exists', () => {
      expect(getFirstName(user)).toEqual('Matthew');
    });
    it('returns false if it doesnt', () => {
      expect(getFirstName({})).toEqual(false);
    });
  });
  describe('getKeyFromObject', () => {
    it('returns the key for the object', () => {
      expect(getKeyFromObject(user, 'email')).toEqual('matthew@gmail.com')
    });
    it('returns false if it doesnt exist', () => {
      expect(getKeyFromObject(user, 'random-key')).toEqual(false);
    })
  });
  describe('getObjectKeys', () => {
    it('returns an array of keys', () => {
      expect(getObjectKeys(user)).toEqual(['firstName', 'lastName', 'email']);
    });
  });
  describe('getObjectValues', () => {
    it('returns an array of values', () => {
      expect(getObjectValues(user)).toEqual(['Matthew', 'Tsinontas', 'matthew@gmail.com']);
    });
  });
  describe('joinObjects', () => {
    it('joins 2 objects together', () => {
      expect(joinObjects(user, address)).toEqual({
        firstName: 'Matthew',
        lastName: 'Tsinontas',
        email: 'matthew@gmail.com',
        address1: 'Apartment 2003',
        address2: '100 West Street'
      })
    });
    it('overwrites the properties of objA with objB', () => {
      expect(joinObjects({ foo: 'bar' }, { foo: 'bat' })).toEqual({ foo: 'bat' });
    });
  });
  describe('addIsObjectProperty', () => {
    it('returns false if the arguement is not an object', () => {
      expect(addIsObjectProperty([])).toEqual(false);
    });
    it('should add the correct property and value', () => {
      const newObj = addIsObjectProperty(user);
      expect(newObj).toHaveProperty('isObject');
      expect(newObj.isObject).toEqual(true);
      expect(newObj).toHaveProperty('firstName');
      expect(newObj.firstName).toEqual('Matthew');
    });
  });
});
