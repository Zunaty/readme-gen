const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown.js')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project called? (Required)',
            validate: titleNameInput => {
                if(titleNameInput) {
                    return true;
                } else {
                    console.log('Please provide a title for your project');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDes',
            message: 'Would you like to enter a description for your project?',
            default: true
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description about your project:',
            when: ({ confirmDes }) => {
                if (confirmDes) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        
    ])
    .then(readmeData => {
        console.log(readmeData)
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

promptUser();
