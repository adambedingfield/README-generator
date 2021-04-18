const generateText = READMEText => {
    return `
    hello
    `;
};

module.exports = templateData => {
    const test = templateData;

    return `
    ${generateText(test)}
    `;
}