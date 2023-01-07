# HR-mgmt-app

## Purpose

The purpose of our app is to demonstrate our knowledge of NodeJS, OOP (Object Oriented Porogramming), and applying those concepts towards making a web application.  The application will act as a basic HR (Human Resources) management software which can help track current employees on a theoretical team.  The app will take in information about employees on a software development team via a NodeJS app, and then generate an HTML file with summaries for each employee with information based on submitted text. There will be 3 types of personnel that can be entered; Manager, Engineer, and Intern.  Depending on the position being submitted will send different questions to the user to answer about the individual being entered.

## Educational Concepts Implemented
>Node JS

>OOP

>HTML & CSS

>TDD (Test-Driven Development)

## Walkthrough Video

Link to walkthrough video...
(Google Drive link to Screencastify link goes here)

## User Story

AS A manager...
I WANT to generate a webpage that displays my team's basic info,
SO THAT I have quick access to their emails and GitHub profiles.

## Acceptence Criteria Notes

GIVEN a command-line application that accepts user input...


- - - - -
WHEN I am prompted for my team members and their information,
THEN an HTML file is generated that displays a nicely formatted team roster based on user input.
>

- - - - -
WHEN I click on an email address in the HTML,
THEN my default email program opens and populates the TO field of the email with the address.
>

- - - - -
WHEN I click on the GitHub username,
THEN that GitHub profile opens in a new tab.
>

- - - - -
WHEN I start the application,
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number.
>Done.  The application process flow is designed to always start with a manager (required for a team).  The requirements don't state that any more team members NEED to be on the team, so I give the user the option to finish the team right then, or add more members (Engineer and Intern are the only 2 options at that point).

- - - - -
WHEN I enter the team manager’s name, employee ID, email address, and office number,
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team.
>Done.  The final question of the startTeam() inquirer prompt is to ask the user if they want to save the team as-is, or add more members.

- - - - -
WHEN I select the engineer option,
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu.
>

- - - - -
WHEN I select the intern option,
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.
>

- - - - -
WHEN I decide to finish building my team,
THEN I exit the application, and the HTML is generated.
>

