// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'installation requirements',
        name: 'installation'
    }
    /* installation
    usage
    credits
    license
    badges
    features
    contributing
    */
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile)
}

// Function call to initialize app
init();
