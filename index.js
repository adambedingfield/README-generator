const inquirer = require('inquirer');

const { writeREADME } = require('./utils/generate-README.js');

const generateREADME = require('./src/template.js');

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
            type: 'list',
            name: 'license',
            message: 'Which license are you using?',
            choices: ['Apache', 'Boost', 'BSD', 'Eclipse']
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
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Would you like to enter extra information on how to reach you?',
            default: true
        },
        {
            type: 'input',
            name: 'extraInfo',
            message: 'Provide extra information on how to reach you.',
            when: ({ confirm }) => {
              if (confirm) {
                return true;
              } else {
                return false;
              }
            }
        }
    ])
}

promptUser()
  .then(answers => {
      if(!answers.extraInfo) {
          answers.extraInfo = '';
      }
      return generateREADME(answers)
  })
  .then (pageText => {
      console.log("README created in the dist folder!");
      return writeREADME(pageText)
  })