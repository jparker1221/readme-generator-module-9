// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title for your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What would you like to include in the Description section?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What would you like to include in the Usage section?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What would you like to include in the Contributing section?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What would you like to include in the Tests section?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license would you like to use?',
    choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT License', 'None'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log('README.md generated!')
  })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
