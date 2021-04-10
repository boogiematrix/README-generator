// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ``;
  }
  return `![${license} badge](https://img.shields.io/badge/license-${license.split(' ').join('_')}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// https://github.com/microsoft/<REPONAME>/blob/main/LICENSE.txt
function renderLicenseLink(data, license) {
  return `[${license.split}](https://github.com/microsoft/${data.title}/blob/main/LICENSE.txt)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Licensed under the <LICENSE> license
function renderLicenseSection(data, license) {
  if (license === 'none') {
    return ``;
  }
  return `## License
  
  Licensed under the ${renderLicenseLink(data, license)} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  
  return `# ${data.title}
  ## Description
  ${renderLicenseBadge(license)}<br/>
  ${data.description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  
  ## Installation
  \`\`\`
  ${ data.installation }
  \`\`\`
  ## Usage
  \`\`\`
  ${data.usage}
  \`\`\`

  ${renderLicenseSection(data, license)}
  
  ## Contributing
${data.contribution}
  ## Tests
  \`\`\`
${data.test}
  \`\`\`
  ## Questions
  Feel free to contact me with any questions
* [My github](https://github.com/${data.github})
* email: ${data.email}
`;
}

module.exports = generateMarkdown;
