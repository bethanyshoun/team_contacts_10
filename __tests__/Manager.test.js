const Manager = require('../lib/Manager');

test('instantiates an object', () => {
    expect(new Manager()).toEqual({"email": "NA", "id": undefined, "name": undefined, "office": undefined});
  });
  

  test('instantiates an object with a name', () => {
    expect(new Manager("Sam")).toEqual({"email": "NA", "id": undefined, "name": "Sam", "office": undefined});
  });

  test('instantiates an object with a name and id', () => {
    expect(new Manager("Sam", 2)).toEqual({"email": "NA", "id": 2, "name": "Sam", "office": undefined});
  });

  test('instantiates an object with a name, id, and email', () => {
    expect(new Manager("Sam", 2, "sam@sam.net")).toEqual({"email": "sam@sam.net", "id": 2, "name": "Sam", "office": undefined});
  });


  test('instantiates an object with a name, id, email, and office number', () => {
    expect(new Manager("Sam", 2, "sam@sam.net", "25A")).toEqual({"email": "sam@sam.net", "id": 2, "name": "Sam", "office": "25A"});
  });