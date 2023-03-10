// imported required modules
const inquirer = require("inquirer");
const fs = require("fs");
// imported local utilities
const utils = require("./utils");
// added prompts for getting inputs from user
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "githubUsername",
    },

    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },

    {
      type: "input",
      message: "What is the title of the project?",
      name: "title",
    },

    {
      type: "input",
      message: "What is your project description?",
      name: "description",
    },

    {
      type: "list",
      choices: [
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License",
        "BSD 2-Clause License",
        "Eclipse Public License 1.0",
        "GNU GPL v3",
        "GNU GPL v2",
        "GNU AGPL v3",
        "ISC License (ISC)",
        "The MIT License",
        "Mozilla Public License 2.0",
        "None",
      ],
      message: "License for your project?",
      name: "license",
    },

    {
      type: "input",
      message: "What is your project installation instructions?",
      name: "installation",
      default: "npm install",
    },

    {
      type: "input",
      message: "What command should be used to run tests?",
      name: "test",
      default: "npm run test",
    },

    {
      type: "input",
      message: "How to use the project?",
      name: "usage",
    },

    {
      type: "input",
      message:
        "What does the user need to know about the contribution details?",
      name: "contributing",
    },
  ])
  // creating a README file using fs.writeFile inside promise
  .then((response) =>
    fs.writeFile("README.md", utils.generateReadme(response), (error) =>
      error ? console.log(error) : console.log("success")
    )
  );
