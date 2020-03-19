// Dependencies
// =============================================================================
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

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
  'View Employees By Department',
  // 'View All Employees By Manager',
  'View All Roles',
  'Add Employee',
  // 'Remove Employee',
  'Update Employee Role',
  // 'Update Employee Manager',
  'View All Departments',
  'Add Department',
  // 'Remove Department',
  'Add Role',
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
    case 'View Employees By Department':
      viewByDept();
      break;
    // case 'View All Employees By Manager':
    //   viewByManager();
    //   break;
    case 'View All Roles':
      viewRoles();
      break;
    case 'Add Employee':
      addEmployee();
      break;
    // case 'Remove Employee':
    //   removeEmployee();
    //   break;
    case 'Update Employee Role':
      updateRole();
      break;
    // case 'Update Employee Manager':
    //   updateManager();
    //   break;
    case 'View All Departments':
      viewDepts();
      break;
    case 'Add Department':
      addDept();
      break;
    // case 'Remove Department':
    //   removeDept();
    //   break;
    case 'Add Role':
      addRole();
      break;
    case 'Exit':
      connection.end();
      break;
  };
};


// Add Employee
const addEmployee = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTasks();
   });
};

// Add Role
const addRole = () => {
const query = '';
connection.query(query, (err,res) =>{
    if (err) throw err;
    console.table(res);
    menuTasks();
});
};

// Add Department
const addDept = () => {
const query = '';
connection.query(query, (err,res) =>{
    if (err) throw err;
    console.table(res);
    menuTasks();
});
};
  
// View All Employees 
const viewEmployees = () => {
  const query = connection.query(`SELECT employees.id, employees.first_name, employees.last_name, 
  roles.salary, roles.title AS roles, employees.manager_id, departments.name AS departments FROM employees
  INNER JOIN roles ON employees.role_id=roles.id 
  INNER JOIN departments ON roles.department_id=departments.id`,
  (err, res) => {
      if (err) throw err;
      console.table(res);
      menuTasks();
  });
}

// View All Departments
const viewDepts = () => {
const query = '';
connection.query(query, (err,res) =>{
    if (err) throw err;
    console.table(res);
    menuTasks();
});
};

// View All Roles
const viewRoles = () => {
const query = '';
connection.query(query, (err,res) =>{
    if (err) throw err;
    console.table(res);
    menuTasks();
});
};

const viewByDept = async function(){
  let d = await inquirer.prompt([
      {
          type: 'input',
          message: 'Enter department:',
          name: 'department'
      }
  ]);
  let department = d.department;
  const query = connection.query(`SELECT employees.first_name, employees.last_name, roles.title, roles.salary, departments.name FROM employees
  INNER JOIN roles ON employees.role_id=roles.id 
  INNER JOIN departments ON roles.department_id=departments.id 
  WHERE departments.name=?;`,
  department,
  (err, res) => {
      if (err) throw err;
      console.table(res);
      menuTasks();
  });
}



// Update Employee Role
const updateRole = () => {
const query = '';
connection.query(query, (err,res) =>{
    if (err) throw err;
    console.table(res);
    menuTasks();
});
};

// const viewByManager = () =>{
//   const query = `SELECT e.first_name AS fn, e.last_name AS ln, m.first_name AS manager_fn, m.last_name AS manager_ln FROM employees AS e 
//   LEFT JOIN employees AS m ON e.manager_id = m.id ORDER BY m.id`;
//   connection.query(query, (err,res) =>{
//       if (err) throw err;
//       console.table(res);
//       menuTasks();
//   });
// };
