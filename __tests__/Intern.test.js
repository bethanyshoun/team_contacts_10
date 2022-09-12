const Intern = require('../lib/Intern');

test('instantiates an object', () => {
    expect(new Intern()).toEqual({"email": "NA", "id": undefined, "name": undefined, "school": undefined});
  });
  

  test('instantiates an object with a name', () => {
    expect(new Intern("Sam")).toEqual({"email": "NA", "id": undefined, "name": "Sam", "school": undefined});
  });

  test('instantiates an object with a name and id', () => {
    expect(new Intern("Sam", 2)).toEqual({"email": "NA", "id": 2, "name": "Sam", "school": undefined});
  });

  test('instantiates an object with a name, id, and email', () => {
    expect(new Intern("Sam", 2, "sam@sam.net")).toEqual({"email": "sam@sam.net", "id": 2, "name": "Sam", "school": undefined});
  });


  test('instantiates an object with a name, id, email, and school name', () => {
    expect(new Intern("Sam", 2, "sam@sam.net", "Michigan State University")).toEqual({"email": "sam@sam.net", "id": 2, "name": "Sam", "school": "Michigan State University"});
  });