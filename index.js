// Import necessary modules
const inquirer = require("inquirer");
const fs = require("fs");

// Import employee classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Set empty array for team members
const teamMembers = [];

//Function to create manager
function createManager() {
  console.log("Please enter the following information for the team manager:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamMembers.push(manager);
      console.log("Manager added!");
      //Once manager has been created, then create a new team
      createTeam();
    });
}

//function to create a new team
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Employee", "Finish building my team"],
      },
    ])
    .then((data) => {
        //Case in order to handle which team member the user wants to add
        switch (data.memberType) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "Employee":
          createEmployee();
          break;
        default:
          generateTeam();
          break;
      }
    });
}
//function to create an engineer
function createEngineer() {
  console.log("Please enter the following information for the engineer:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      teamMembers.push(engineer);
      console.log("Engineer added!");
      //give the user the choice to create other team members
      createTeam();
    });
}
