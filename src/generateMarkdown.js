// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## How to use

  ${data.usage}

  ## Contributers

  ${data.name}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions please contact me at: [${data.email}](${data.email})
  This is my GitHub: [${data.github}](${data.github})

  `;
}

module.exports = generateMarkdown;
