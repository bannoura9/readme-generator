// array of questions for user
const questions = [
  //github username
  {
    type: "input",
    name: "githubusername",
    message: "What is your GitHub username?",
  },
  //email address
  {
    type: "input",
    name: "emailaddress",
    message: "What is your Email address?",
  },
  //title
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  //description
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your Project",
  },
  // license info
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have",
    choices: [
      "Mozilla Public License 2.0",
      "MIT License",
      "GNU AGPLv3",
      "GNU GPLv3",
    ],
  },
  {
    type: "input",
    name: "commandInstall",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "commandRun",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
];

const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api");

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) throw error;
    console.log("Generated readme file successfully");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    let data = { ...response };
    switch (response.license) {
      case "Mozilla Public License 2.0":
        data.licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
        break;
      case "MIT License":
        data.licenseBadge = `![MIT License](https://img.shields.io/badge/MIT-License-brightgreen)`;
        break;
      case "GNU AGPLv3":
        data.licenseBadge = `![GNU AGPLv3](https://img.shields.io/badge/GNU-AGPLv3-orange)`;
        break;
      case "GNU GPLv3":
        data.licenseBadge = `![GNU GPLv3](https://img.shields.io/badge/GNU-GPLv3-red)`;
        break;
    }
    
    api(data.githubusername).then((apiResponse) => {
      data.avatar = apiResponse.data.avatar_url;
      data.email = apiResponse.data.email;
      console.log(data);
      writeToFile("readme.md", generateMarkdown(data));
    });
  });
}

// function call to initialize program
init();
