//node packages
const fs = require('fs');
const inquirer = require('inquirer');

//generate page file
const generateMarkdown = require('./utils/generateHTML');

//required team classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArray =[];

// team manager prompts
function addManager() {
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


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a user license',
        choices: ['Apache', 'MIT', 'no license']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }
]
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer
        .prompt(questions)
        .then((data) => {
            return writeToFile ('./dist/generated-README.md', generateMarkdown(data));
        })
        .catch (err => console.log(err));
}

// Function call to initialize app
init();