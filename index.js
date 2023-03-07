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
//Function to add an intern to the team
function createIntern() {
  console.log("Please enter the following information for the intern:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamMembers.push(intern);
      console.log("Intern added!");
      //Give the option to the user to choose the team member to create
      createTeam();
    });
}

//Function to create an employee team member
function createEmployee() {
  console.log("Please enter the following information for the employee:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
    ])
    .then((data) => {
      const employee = new Employee(data.name, data.id, data.email);
      teamMembers.push(employee);
      console.log("Employee added!");
      createTeam();
    });
}

const generateHTML = (teamMembers) => {
  const manager = teamMembers.find((member) => member instanceof Manager);
  // Generate manager card HTML
  const managerCard = `
  <div class="card">
    <div class="card-header">
      <h2>${manager.getName()}</h2>
      <h3><i class="fas fa-mug-hot"></i> Manager</h3>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: ${manager.getId()}</li>
        <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li>Office number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
`;
// Generate team member cards HTML
const teamMemberCards = teamMembers
.filter((member) => !(member instanceof Manager))
.map((member) => {
  let icon = '';
  let property = '';
  if (member instanceof Engineer) {
    icon = '<i class="fas fa-glasses"></i>';
    property = `GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`;
  } else if (member instanceof Intern) {
    icon = '<i class="fas fa-user-graduate"></i>';
    property = `School: ${member.getSchool()}`;
  } else if (member instanceof Employee) {
    icon = '<i class="fas fa-user"></i>';
  }
  return `
    <div class="card">
      <div class="card-header">
        <h2>${member.getName()}</h2>
        <h3>${icon} ${member.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${member.getId()}</li>
          <li>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
          <li>${property}</li>
        </ul>
      </div>
    </div>
  `;
})
.join('');

};

createManager();
