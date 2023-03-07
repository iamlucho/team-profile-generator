// Import necessary modules
const inquirer = require('inquirer');
const fs = require('fs');

// Import employee classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');