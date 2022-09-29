//Function to generate HTML
  function generateMarkdown (data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## [Description](#table-of-contents)
  ${data.description}
  
            
  ## [Installation](#table-of-contents)
  ${data.installation}
  
  
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  
  ${renderLicenseSection(data.license)}
  
  
  ## [Contributing](#table-of-contents)
  ${data.contributing}
  
  
  ## [Tests](#table-of-contents)
  ${data.tests}
  
  
  ## [Questions](#table-of-contents)
  View my GitHub repository at
  [${data.github}](https://github.com/${data.github}/)
  
  Email me at
  ${data.email}
  
  `;
  }
  
  module.exports = generateHTML;