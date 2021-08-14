// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const genDescription = desData => {
  if(!desData) {
    return '';
  }

  return `
  ## Description

  ${desData}
  `;
}

const genInstall = installData => {
  if(!installData) {
    return '';
  }

  return `
  ## Installation

  ${installData}
  `;
}

const genUsage = usageData => {
  if(!usageData) {
    return '';
  }

  return `
  ## Usage

  ${usageData}
  `;
}

const genTest = testData => {
  if(!testData) {
    return '';
  }

  return `
  ## Tests

  ${testData}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data)
  return [data.title, `
  # ${data.title}

  ${genDescription(data.description)}

  ${genInstall(data.installation)}

  ${genUsage(data.usage)}

  ## Contributers

  ${data.name}

  ${genTest(data.test)}

  ## Questions

  If you have any questions please contact me at: [${data.email}](${data.email}) \n
  This is my GitHub: [${data.github}](https://github.com/${data.github})

  `]
}

module.exports = generateMarkdown;
