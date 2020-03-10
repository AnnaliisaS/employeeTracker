// Dependencies
// =============================================================================
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
const queries = require('./queries');

// Sql db connection
// =============================================================================
const connection = mysql.createConnection({ 
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Vortexringstate2!",
    database: "companyDB" 
});
connection.connect(function(err) {
    if (err) {
      console.error("Having a Malfunction: " + err.stack);
      return;
    }
    console.log("Connection Success " + connection.threadId);
  });

// Initial User Interface
// =============================================================================
inquirer.prompt([
    {
        type: 'list',
        message: "What Would you like to do?",
        name: 'employees',
        choices: 
        [                 
        'View All Employees',
        'View All Employees By Department',
        'View All Employees By Manager',
        'Add Employee',
        'Remove Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'Exit'
        ],
    },
]) .then(answers => {
    console.info('Testing interface, You would like to:', answers.employees);
  });

