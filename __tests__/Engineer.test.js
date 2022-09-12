const Engineer = require('../lib/Engineer');

test('instantiates an object', () => {
    expect(new Engineer()).toEqual({"email": "NA", "id": undefined, "name": undefined});
  });
  

  test('instantiates an object with a name', () => {
    expect(new Engineer("Sam")).toEqual({"email": "NA", "id": undefined, "name": "Sam", "github": undefined});
  });

  test('instantiates an object with a name and id', () => {
    expect(new Engineer("Sam", 2)).toEqual({"email": "NA", "id": 2, "name": "Sam", "github": undefined});
  });

  test('instantiates an object with a name, id, and email', () => {
    expect(new Engineer("Sam", 2, "sam@sam.net")).toEqual({"email": "sam@sam.net", "id": 2, "name": "Sam", "github": undefined});
  });


  test('instantiates an object with a name, id, email, and github username', () => {
    expect(new Engineer("Sam", 2, "sam@sam.net", "github.com/samsamsam")).toEqual({"email": "sam@sam.net", "id": 2, "name": "Sam", "github": "github.com/samsamsam"});
  });