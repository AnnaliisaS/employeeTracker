DROP DATABASE IF EXISTS companyDB;
CREATE DATABASE companyDB;

USE companyDB;

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL
);

CREATE TABLE departments(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name VARCHAR(30) NOT NULL,
  budget DECIMAL(18,2)
);

CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(18,2),
  department_id INT
);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", "1", "2"), ("Sarah", "Connor", "2", NULL), 
("Sean", "Connery", "3", NULL),("Michael", "Bolton", "4", "3"),("Jane", "Doe", "5", NULL),
("Jackie", "Chan", "7", "8"),("Kevin", "Bacon", "8", NULL),("Rob", "Lowe", "7", "8"),
("Jessica", "Simpson", "6", NULL),("Wayne", "Wells", "1", "2");

INSERT INTO departments (name)
VALUES ("Sales"), ("Legal"),("Engineering"),("Accounting"),("HR");

INSERT INTO roles (title, salary, department)
VALUES ("Salesperson", "60000", "1"),("Sales Lead", "70000", "1"),("Lead Engineer", "150000", "3"),("Software Engineer", "120000", "3"),
("Lawyer", "190000", "2"),("Accountant", "125000", "4"),("Human Resources Specialist", "80000", "5"),("HR Lead", "130000", "5");

SELECT * FROM emplyees;