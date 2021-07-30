function generateMarkdown(data) {
  return `
![${data.license}](https://img.shields.io/badge/${data.license}-License-green)
  
# ${data.title}

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

## License

${data.license}
       
## Features
       
${data.features}
        
## How to Contribute
        
${data.guidelines}
        
## Tests
${data.test}
    
## Questions
${data.username}
https://github.com/${data.username}

If you have any further questions, please email me on ${data.email}
`};

module.exports = { generateMarkdown };
