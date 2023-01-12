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
  
  ---
  
  If you utilize this app to generate a README for your project, I'd love to see. Feel free to contact me with examples or any questions via the information below:
  
  GitHub: [@${githubUsername}](https://github.com/${githubUsername})
  
  Email: ${email}`;
};
module.exports = {
  generateReadme,
};
