// Initialize variables for Inquirer and File System
const inquirer = require('inquirer');
const fs = require('fs');

// User Inquirer to prompt user (in terminal via NodeJS) for answers based on questions about subjects in the standard README file template
const startTeam = () => {
    inquirer
    .prompt([
      {
      type: 'input',
      message: 'Hello, manager, and welcome to the HR Management App! \n What is your name?',
      name: 'mgrName',
      },
      {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'mgrEmployeeID',
      },
      {
      type: 'input',
      message: 'What is your email address?',
      name: 'mgrEmailAddress',
      },
      {
      type: 'input',
      message: 'What office number are you in?',
      name: 'mgrOfficeNbr',
      },
      {
      type: 'list',
      message: 'Would you like to add any team members, or save your team as-is?',
      name: 'addTeamMember',
      choices: ['Engineer', 'Intern', 'Save Team'],
      },
    ])
    // Once user prompts have been completed, ask the user if they're done creating their team, or if they want to add more memebers
    .then((response) => {
        // START TEST CODE
        console.log(`mgrName: ${response.mgrName} \nmgrEmployeeID: ${response.mgrEmployeeID} \nmgrEmailAddress: ${response.mgrEmailAddress} \nmgrOfficeNbr: ${response.mgrOfficeNbr}`)
        // END TEST CODE                    
        if (response.addTeamMember === 'Engineer') {
        // call addEngineer()
      } else if (response.addTeamMember === 'Intern') {
        // call addIntern()
      } else {
        // Build HTML with objects created during inquirer prompts
        // call buildHTML()

      };

    });
};

startTeam();

