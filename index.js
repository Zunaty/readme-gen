const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown.js')

const promptUser = () => {
    return inquirer.prompt([

        // Asking for user name
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

        // Asking for user GitHub
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

        // Asking for user email
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },

        // Asking for project name
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

        // Asking if they would like to add a description
        {
            type: 'confirm',
            name: 'confirmDes',
            message: 'Would you like to enter a description for your project?',
            default: true
        },

        // Getting description for project if above is true
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

        // Asking if they would like to add an installation section
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to include an installation section for your project?',
            default: true
        },

        // Getting installation for project if above is true
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your project:',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        // Asking if they would like to add a usage section
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to add a usage section for your project?',
            default: true
        },

        // Getting description for project if above is true
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information about your project:',
            when: ({ confirmUsage }) => {
                if (confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },

    ])
    .then(readmeData => {
        //console.log(readmeData)
        return readmeData;
    })
}

// Creates the markdown file
function writeToFile(data) {
    fs.writeFile(`./dist/README(${data[0]}).md`, data[1], err => {
        if(err) {
            console.log(err)
        }
        console.log("File Created!")
    })
}

// Runs as soon as the user calls the app
promptUser()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then((filename, data) => {
        return writeToFile(filename, data);
    })
    .catch(err => {
        console.log(err);
    })
