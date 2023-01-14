// creating a utility function called generateReadme which will generate a markdown syntax based on the input given by user
const generateReadme = (response) => {
  // inputs destructured from response
  const {
    githubUsername,
    email,
    title,
    description,
    license,
    installation,
    test,
    usage,
    contributing,
  } = response;

  const { image, url } = getLicenseMeta(license);
  // table of contents is created dynamically using if block so that it displays only the given inputs
  let licenseDetails = `# ${title}

[![License](${image})](${url})

## Table of Contents`;

  if (description) {
    licenseDetails += `
* [Description](#description)`;
  }
  if (installation) {
    licenseDetails += `
* [Installation](#installation)`;
  }
  if (usage) {
    licenseDetails += `
* [Usage](#usage)`;
  }
  if (test) {
    licenseDetails += `
* [Test](#test)`;
  }
  if (contributing) {
    licenseDetails += `
* [Contribution](#contribution)`;
  }
  if (license) {
    licenseDetails += `
* [License](#license)`;
  }
  if (email || githubUsername) {
    licenseDetails += `
* [Questions](#questions)`;
  }

  //  similar to the table of content logic we are displaying only the given inputs
  if (description) {
    licenseDetails += `
## Description 
    
*The what, why, and how:* 
      
${description}`;
  }
  if (installation) {
    licenseDetails += `
## Installation
  
${installation}`;
  }
  if (usage) {
    licenseDetails += `
## Usage 
  
${usage}`;
  }
  if (test) {
    licenseDetails += `
## Test

${test}`;
  }
  if (contributing) {
    licenseDetails += `
## Contribution

${contributing}`;
  }
  if (license) {
    licenseDetails += `
## License
  
This project is licensed under ${license}

   
---`;
  }
  if (email || githubUsername) {
    licenseDetails += `
## Questions

If you have any questions about your repo, open an issue or contact me directly at ${email}. You can find more of my work at [@${githubUsername}](https://github.com/${githubUsername})`;
  }
  return licenseDetails;
};

// getLicenceMeta is util function which will accepts the name of the license and return the batch image URL and website link
const getLicenseMeta = (name) => {
  switch (name) {
    case "Apache 2.0 License":
      return {
        image: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
        url: "https://opensource.org/licenses/Apache-2.0",
      };
    case "Boost Software License 1.0":
      return {
        image: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
        url: "https://www.boost.org/LICENSE_1_0.txt",
      };
    case "BSD 3-Clause License":
      return {
        image: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
        url: "https://opensource.org/licenses/BSD-3-Clause",
      };
    case "BSD 2-Clause License":
      return {
        image: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
        url: "https://opensource.org/licenses/BSD-2-Clause",
      };
    case "Eclipse Public License 1.0":
      return {
        image: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
        url: "https://opensource.org/licenses/EPL-1.0",
      };
    case "GNU GPL v3":
      return {
        image: "https://img.shields.io/badge/License-GPLv3-blue.svg",
        url: "https://www.gnu.org/licenses/gpl-3.0",
      };
    case "GNU GPL v2":
      return {
        image: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
        url: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
      };
    case "GNU AGPL v3":
      return {
        image: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
        url: "https://www.gnu.org/licenses/agpl-3.0",
      };
    case "ISC License (ISC)":
      return {
        image: "https://img.shields.io/badge/License-ISC-blue.svg",
        url: "https://opensource.org/licenses/ISC",
      };
    case "The MIT License":
      return {
        image: "https://img.shields.io/badge/License-MIT-yellow.svg",
        url: "https://opensource.org/licenses/MIT",
      };
    case "Mozilla Public License 2.0":
      return {
        image: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
        url: "https://opensource.org/licenses/MPL-2.0",
      };
  }
};
// generateReadme is exported so that it can be used inside the index.js
module.exports = {
  generateReadme,
};
