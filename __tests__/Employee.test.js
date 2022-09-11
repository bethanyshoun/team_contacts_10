const Employee = require('../lib/Employee');

test('instantiates an object', () => {
    expect(new Employee()).toEqual({"email": "NA", "id": undefined, "name": undefined});
  });
  

  test('instantiates an object with a name', () => {
    expect(new Employee("Sam")).toEqual({"email": "NA", "id": undefined, "name": "Sam"});
  });

  test('instantiates an object with a name and id', () => {
    expect(new Employee("Sam", 2)).toEqual({"email": "NA", "id": 2, "name": "Sam"});
  });

  test('instantiates an object with a name, id, and email', () => {
    expect(new Employee("Sam", 2, "sam@sam.net")).toEqual({"email": "sam@sam.net", "id": 2, "name": "Sam"});
  });