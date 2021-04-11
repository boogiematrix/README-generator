// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ``;
  }
  return `![${license} badge](https://img.shields.io/badge/license-${license.split(' ').join('_')}-green)`
}

// function that returns the license link
function renderLicenseLink(data, license) {
  if (license === 'MIT') {
    return `[${license}](https://choosealicense.com/licenses/mit/)`
  } else if (license === 'Apache 2.0') {
    return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`
  } else {
    return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`
  }
}

// function that returns the license section of README
function renderLicenseSection(data, license) {
  if (license === 'none') {
    return ``;
  }
  return `## License
  
  Licensed under the ${renderLicenseLink(data, license)} license`
}

// function that returns a screenshot or video
function renderVisual(data) {
  if (!data.screenshot) {
    return ``;
  }
  return `![Demo](${data.screenshot})`
}

// function to generates markdown for README
function generateMarkdown(data) {
  let license = data.license;
  
  return `# ${data.title}
  ## Description
  ${renderLicenseBadge(license)}<br/>
  ${data.description}<br/>
  ${renderVisual(data)}
  
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
