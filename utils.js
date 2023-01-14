const generateReadme = (response) => {
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
  return `# ${title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Contribution](#contribution)
  * [License](#license)

  ## Description 
    
  *The what, why, and how:* 
    
  ${description}
  
  
 
    
  
  ## Installation
  
  ${installation}
  
  ## Usage 
  
 ${usage}

 ## Test

 ${test}
 
 ## Contribution

 ${contributing}

  
  ## License
  
 ${license}
 [![License](${image})](${url})

  ---
  
  If you utilize this app to generate a README for your project, I'd love to see. Feel free to contact me with examples or any questions via the information below:
  
  GitHub: [@${githubUsername}](https://github.com/${githubUsername})
  
  Email: ${email}`;
};

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

module.exports = {
  generateReadme,
};
