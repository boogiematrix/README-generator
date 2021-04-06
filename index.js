// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions for use',
        name: 'usage'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to use?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License']
    },
    {
        type: 'input',
        message: 'What are the guidelines for contribution?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are your instructions for testing?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the local file path where you would like to save this file?',
        name: 'filePath'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data)
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log('success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            let fileName = 'DEARME.md'
                //`${data.filePath}./READEME.md`
            writeToFile(fileName, data)
        })
}

// Function call to initialize app
init();
