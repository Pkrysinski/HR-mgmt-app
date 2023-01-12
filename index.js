// Initialize variables for Inquirer and File System
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const builtTeamFinal = [];

const generateHTML = (builtTeamFinal) =>
`<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Team</title>
  <link rel="stylesheet" href="jass.css" />
</head>
<body>
  <div class="container pad-container">
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>My Team!</h1>
      </div>
      <div className="card-body m-5" id="teamCards">
        <!-- employee cards here -->
      </div>
    </div>
    <script src="./index.js"></script>
  </div>
</body>
</html>
`;

// User Inquirer to prompt user (in terminal via NodeJS) for answers based on questions about subjects in the standard HTML file template
const startTeam = () => {
    inquirer
    .prompt([
      {
      type: 'input',
      message: 'Hello, manager, and welcome to the HR Management App! \n What is your name?',
      name: 'name',
      },
      {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'id',
      },
      {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      },
      {
      type: 'input',
      message: 'What office number are you in?',
      name: 'officeNumber',
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

        let newManager = new Manager(response.name,response.id,response.email,response.officeNumber);

        builtTeamFinal.push(newManager);
            
        if (response.addTeamMember === 'Engineer') {
          addEngineer();
      } else if (response.addTeamMember === 'Intern') {
          addIntern();
      } else {
        // Build HTML with objects created during inquirer prompts
        finishTeam();
      };
    });
};

const addEngineer = () => {
  inquirer
  .prompt([
    {
    type: 'input',
    message: 'Please enter the name of the engineer being entered!',
    name: 'name',
    },
    {
    type: 'input',
    message: 'What is your employee ID?',
    name: 'id',
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'What is your github user name?',
    name: 'github',
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

      let newEngineer = new Engineer(response.name,response.id,response.email,response.github);

      builtTeamFinal.push(newEngineer);

      if (response.addTeamMember === 'Engineer') {
        addEngineer();
    } else if (response.addTeamMember === 'Intern') {
        addIntern();
    } else {
      // Build HTML with objects created during inquirer prompts
      finishTeam();
    };
  });
};

const addIntern = () => {
  inquirer
  .prompt([
    {
    type: 'input',
    message: 'Please enter the name of the intern being entered!',
    name: 'name',
    },
    {
    type: 'input',
    message: 'What is your employee ID?',
    name: 'id',
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'What is your github user name?',
    name: 'school',
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

      let newIntern = new Intern(response.name,response.id,response.email,response.school);

      builtTeamFinal.push(newIntern);

      if (response.addTeamMember === 'Engineer') {
        addEngineer();
    } else if (response.addTeamMember === 'Intern') {
        addIntern();
    } else {
      // Build HTML with objects created during inquirer prompts
      finishTeam();
    };
  });
};

const finishTeam = () => {

  console.log(builtTeamFinal);

  const htmlPageContent = generateHTML(builtTeamFinal);
  fs.writeFile('indexNew.html', htmlPageContent, (err) =>
  err ? console.error(err) : console.log('Success!'));

};

startTeam();