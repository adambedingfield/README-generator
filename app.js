const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your projects usage?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are your contribution guidelines?'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'What are the test instructions?'
        },
    ])
}

promptUser()