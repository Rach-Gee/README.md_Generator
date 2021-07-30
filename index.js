//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const markdown = require('./utils/generateMarkdown.js');



//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your projects installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the features of your project',
        name: 'features',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are the test instructions',
        name: 'test',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License', 'Boost_Software_License 1.0', 'The_Unlicense'],
        name: 'license'
    }];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        let readmeContent = markdown.generateMarkdown(response)
    console.log(response);
    writeToFile('README.md', readmeContent)
    }
)}

// Function call to initialize app
init();
