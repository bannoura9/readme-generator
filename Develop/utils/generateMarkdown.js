// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Short Description
  ### ${data.description}\

  ## Table of Contents:
- [Installation](#Installation)
- [Usage](#Usage)
- [Licenses](#Licenses)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)



## Installation
To install necessary dependencies run the following command:
  ${data.commandInstall}\

## Test:
  To run tests, run the following command:
  ${data.commandRun}\


## Usage:
  ${data.usage}\

## Licenses
**These are the licenses needed for this project.** <br/>
${data.licenseBadge}

## Contributing:
  ${data.contributing}


## Questions:
Contact Me: ${data.emailaddress}<br/>
GitHub Username: ${data.githubusername}<br/>
Github profile picture:<br/>
![profile-picture](${data.avatar}=100x)

`;
}

module.exports = generateMarkdown;
