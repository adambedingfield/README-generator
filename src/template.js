module.exports = (answers) => {

return `# ${answers.project}<br>
## Description<br>
${answers.description}<br>
## Table of Contents<br>
* [Installation](#installation)<br>
* [Usage](#usage)<br>
* [License](#license)<br>
* [Contributing](#contributing)<br>
* [Tests](#tests)<br>
* [Questions](#questions)<br>
## Installation<br>
${answers.installation}<br>
## Usage<br>
${answers.usage}
## License<br>
## Contributing<br>
${answers.contribution}
## Tests<br>
${answers.instructions}
## Questions<br>
${answers.github}
${answers.email}
${answers.extraInfo}
`;
}
