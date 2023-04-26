// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "![license](https://img.shields.io/badge/license-Apache_2.0-green)";
    case "GNU GPLv3 License":
      return "![license](https://img.shields.io/badge/license-GNU_GPLv3-green)";
    case "MIT License":
      return "![license](https://img.shields.io/badge/license-MIT-green)";
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "GNU GPLv3 License":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "MIT License":
      return "https://opensource.org/license/mit/";
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License
  
  This application is covered under the ${license}. For more information about this license, visit ${renderLicenseLink(license)}.`
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)} 

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  ### If you have any questions regarding this project, you can reach me here:

  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
