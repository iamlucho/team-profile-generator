// Import necessary modules
const inquirer = require('inquirer');
const fs = require('fs');

// Import employee classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Set empty array for team members
const teamMembers = [];

function createManager() {
    console.log('Please enter the following information for the team manager:');
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
      },
    ]).then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
      teamMembers.push(manager);
      console.log('Manager added!');
      createTeam();
    });
  }
  function createTeam() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'memberType',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Employee', 'Finish building my team'],
      },
    ]).then((data) => {
      switch (data.memberType) {
        case 'Engineer':
          createEngineer();
          break;
        case 'Intern':
          createIntern();
          break;
        case 'Employee':
          createEmployee();
          break;
        default:
          generateTeam();
          break;
      }
    });
  }