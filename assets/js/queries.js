// Dependencies
// =============================================================================
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

// Queries/functions
// =============================================================================

// View All Employees 
const viewEmployees = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};

// View All Employees By Department
const viewByDept = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};

// View All Employees By Manager
const viewByManager = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};

// Add Employee
const addEmployee = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};

// Remove Employee
const removeEmployee = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};

// Update Employee Role
const updateRole = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};

// Update Employee Manager
const updateManager = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};

// View All Departments
const viewDepts = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};

// Add Department
const addDept = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};

//Remove Department
const removeDept = () =>{
   const query = '';
   connection.query(query, (err,res) =>{
       if (err) throw err;
       console.table(res);
       menuTask();
   });
};


module.exports = queries;
