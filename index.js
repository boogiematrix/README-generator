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
        message: 'Give a description of your project',
        name: 'description'
    },
    {
        type: 'confirm',
        message: 'Would you like to include a demo screenshot or video?(y/n)',
        name: 'confirm'
    }, 
    {
        type: 'input',
        name: 'screenshot',
        message: 'Paste the image url here',
        when: function (answers) {
            return answers.confirm;
        }
    },
    {
        type: 'input',
        message: 'command line installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions for use in the command line',
        name: 'usage'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to use?',
        choices: ['Apache 2.0', 'GNU General Public v3.0', 'MIT', 'none']
    },
    {
        type: 'input',
        message: 'What are the guidelines for contribution?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Input tests for your project here',
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
