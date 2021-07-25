// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.title}

    ## Overview
        
    ${data.description}

    1. [Installation](#Installation)

    2. [Usage](#Usage)

    3. [Features](#Features)

    4. [How to Contribute](#How-to-Contribute)

    5. [Tests](#Tests)

    6. [Questions](#Questions)
        
    ## Installation
        
    ${data.installation}
        
    ## Usage
        
    ${data.usage}
        
    ## Features
        
    ${data.features}
        
    ## How to Contribute
        
    ${data.guidelines}
        
    ## Tests
    ${data.test}
    
    ## Questions
    ${response.questions}`

};

module.exports = generateMarkdown;
