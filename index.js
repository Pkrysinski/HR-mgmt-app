// Initialize variables for Inquirer and File System
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const builtTeamFinal = [];
const htmlTeamFinal = [];
let htmlCards = "";

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
        ${htmlCards}
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

        // Create new manager class variable and initialize it with the responses
        let newManager = new Manager(response.name,response.id,response.email,response.officeNumber);

        // Push the newManager data to the global builtTeamFinal array
        builtTeamFinal.push(newManager);
            
        // Prompt user to ask if they want to add an engineer, intern, or save team as-is
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

      // Create new engineer class variable and initialize it with the responses
      let newEngineer = new Engineer(response.name,response.id,response.email,response.github);

      // Push the newEngineer data to the global builtTeamFinal array
      builtTeamFinal.push(newEngineer);

      // Prompt user to ask if they want to add an engineer, intern, or save team as-is
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
    message: 'What school are you in?',
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

      // Create new intern class variable and initialize it with the responses
      let newIntern = new Intern(response.name,response.id,response.email,response.school);

      // Push the newIntern data to the global builtTeamFinal array
      builtTeamFinal.push(newIntern);

      // Prompt user to ask if they want to add an engineer, intern, or save team as-is
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

// NEW CODE START
let splitEmployees = (builtTeamFinal) => {
  // Create new, empty arrays for Managers, Engineers, and Interns
  let managerArray = [];
  let engineerArray = [];
  let internArray = [];

  // Trying to split up the builtTeamFinal object into separate arrays based on role, but getting the following error...
  // Below is based on what Jacek recommended...
  managerArray.push(builtTeamFinal.filter(manager => manager.getRole() === "Manager" ).map( managerArray => createManagerCard(managerArray)));
  engineerArray.push(builtTeamFinal.filter(engineer => engineer.getRole() === "Engineer" ).map( engineerArray => createEngineerCard(engineerArray)));
  internArray.push(builtTeamFinal.filter(intern => intern.getRole() === "Intern" ).map( internArray => createInternCard(internArray)));

  htmlTeamFinal.push(managerArray);
  htmlTeamFinal.push(engineerArray);
  htmlTeamFinal.push(internArray);

  return htmlTeamFinal.join("");

};


// Loop through the objects in the managerArray, and create a managerCardHTML for each
let createManagerCard = (Manager) => {
  return     `<div class="card">
  <h3>Name: ${Manager.name}</h3>
  <p>${Manager.getRole()}</p>
  <p>ID: ${Manager.id}</p>
  <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${Manager.email}" target="_blank" >Email: ${Manager.email}</a></p>
  <p>Office Number: ${Manager.officeNumber}</p>
</div>`
};

// Loop through the objects in the engineerArray, and create a engineerCardHTML for each
let createEngineerCard = (Engineer) => {
  return    `<div class="card">
  <h3>Name: ${Engineer.name}</h3>
  <p>${Engineer.getRole()}</p>
  <p>ID: ${Engineer.id}</p>
  <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${Engineer.email}" target="_blank">Email: ${Engineer.email}</a></p>
  <p><a href="https://github.com/${Engineer.github}" target="_blank">GitHub: ${Engineer.github}</a></p>
</div>`
};

// Loop through the objects in the internArray, and create a internCardHTML for each
let createInternCard = (Intern) => {
  return   `<div class="card">
  <h3>Name: ${Intern.name}</h3>
  <p>${Intern.getRole()}</p>
  <p>ID: ${Intern.id}</p>
  <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${Intern.email}" target="_blank">Email: ${Intern.email}</a></p>
  <p>School: ${Intern.school}</p>
</div>`
};
// NEW CODE END

const finishTeam = () => {

  htmlCards = splitEmployees(builtTeamFinal);

  // Build the HTML page with the data aggregated from Inquirer
  const htmlPageContent = generateHTML(htmlCards);

  fs.writeFile('indexNew.html', htmlPageContent, (err) =>
  err ? console.error(err) : console.log('Success!'));
};

// Initialize the program and start building your team!
startTeam();