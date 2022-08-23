class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const employee = new Employee ("Bob", 1, "bob@bob.com")
console.log(employee.email);