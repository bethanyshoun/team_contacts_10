//generate page file
const generateHTML= require('./src/generateHTML');

//node packages
const fs = require('fs');
const inquirer = require('inquirer');

//required team classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const teamArray =[];

// team manager prompts
const addManager = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the team manager's name",
                //validation?
            },
            {
                type: "input",
                name: "id",
                input: "Enter the manager's employe ID"
            },
            {
                type: "input",
                name: "email",
                input: "Enter the mangaer's email address"
            },
            {
                type: "input",
                name: "office",
                input: "Enter the mangaer's office number"
            }
        ])
        .then(managerAnswers => {
            const { name, id, email, office } = managerAnswers;
            const manager = new Manager (name, id, email, office);

            teamArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log(`
    =========================
    Add Employees to the Team
    =========================
    `);

    return inquirer
        .prompt ([
            {
                type: "list",
                name: "role",
                message: "Please choose the employee's role",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "Enter the Employee's Name"
            },
            {
                type: "input",
                name: "id",
                message: "Enter the Employee's ID"
            },
            {
                type: "input",
                name: "email",
                message: "Enter the Employee's Email"
            },
            {
                type: "input",
                name: "github",
                message: "Enter the Engineer's GitHub Username",
                when: (input) => input.role === "Engineer",
                validate: nameInput => {
                    if (nameInput ) {
                        return true;
                    } else {
                        console.log ("Please enter the engineer's GitHub username!")
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "Enter the Intern's School Name",
                when: (input) => input.role === "Intern",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log ("Please enter the intern's school name!")
                    }
                }
            },
            {
                type: "confirm",
                name: "confirmAdd",
                message: "Would you like to add additional team members?",
                defauilt: true
            }
        ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAdd } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer (name, id, email, github);
                console.log(employee);
            } 
                else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
                console.log(employee);
                }

            teamArray.push(employee);

            if (confirmAdd) {
                return addEmployee(teamArray);
            } 
                else {
                 return teamArray;
                }
        })
};

const writeFile = data => {
    fs.writeFile('./dist/generatedindex.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
            else {
                console.log("Your team profile has been generated! See it in generatedindex.html!")
            }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });