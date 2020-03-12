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
const main = async() =>{
connection.connect(function(err) {
    if (err) {
      console.error("Having a Malfunction: " + err.stack);
      return;
    }
    console.log("Connection Success " + connection.threadId);
    menuTasks();
  });
}

 main();

// Initial User Interface
// =============================================================================
const menuChoices = [                 
  'View All Employees',
  'View All Employees By Department',
  'View All Employees By Manager',
  'Add Employee',
  'Remove Employee',
  'Update Employee Role',
  'Update Employee Manager',
  'View All Departments',
  'Add Department',
  'Remove Department',
  'Exit'
  ];

const menuTasks = async () => {
  let answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: menuChoices
  });
  switch (answer.action){
    case 'View All Employees':
      viewEmployees();
      break;
    case 'View All Employees By Department':
      viewByDept();
      break;
    case 'View All Employees By Manager':
      viewByManager();
      break;
    case 'Add Employee':
      addEmployee();
      break;
    case 'Remove Employee':
      removeEmployee();
      break;
    case 'Update Employee Role':
      updateRole();
      break;
    case 'Update Employee Manager':
      updateManager();
      break;
    case 'View All Departments':
      viewDepts();
      break;
    case 'Add Department':
      addDept();
      break;
    case 'Remove Department':
      removeDept();
      break;
    case 'Exit':
      connection.end();
      break;
  };
};

              
