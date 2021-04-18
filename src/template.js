const generateLicense = (answers) => {
    if (answers.license === 'Apache') {
        licenseText = 'This project is licensed under Apache.';
        licenseLink = 'https://opensource.org/licenses/Apache-2.0'
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    }
    else if (answers.license === 'Boost') {
        licenseText = 'This project is licensed under Boost.';
        licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
        return `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
    }
    else if (answers.license === 'BSD') {
        licenseText = 'This project is licensed under BSD.';
        licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
        return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    }
    else if (answers.license === 'Eclipse') {
        licenseText = 'This project is licensed under Eclipse.';
        licenseLink = 'https://opensource.org/licenses/EPL-1.0'
        return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
    }
}

module.exports = (answers) => {
return `# ${answers.project} ${generateLicense(answers)}<br>
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
${answers.installation}
## Usage<br>
${answers.usage}
## License<br>
${licenseText}<br>
Link: ${licenseLink}
## Contributing<br>
${answers.contribution}
## Tests<br>
${answers.instructions}
## Questions<br>
GitHub: https://github.com/${answers.github}<br>
Email: ${answers.email}<br>
${answers.extraInfo}
`;
}
