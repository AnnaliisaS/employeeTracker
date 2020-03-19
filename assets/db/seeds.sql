INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", "1", "2"), ("Sarah", "Connor", "2", "null"), 
("Sean", "Connery", "3", "null"),("Michael", "Bolton", "4", "3"),("Jane", "Doe", "5", "null"),
("Jackie", "Chan", "7", "8"),("Kevin", "Bacon", "8", "null"),("Rob", "Lowe", "7", "8"),
("Jessica", "Simpson", "6", "null"),("Wayne", "Wells", "1", "2");

INSERT INTO departments (name)
VALUES ("Sales"), ("Legal"),("Engineering"),("Accounting"),("HR");

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", "60000", "1"),("Sales Lead", "70000", "1"),("Lead Engineer", "150000", "3"),("Software Engineer", "120000", "3"),
("Lawyer", "190000", "2"),("Accountant", "125000", "4"),("Human Resources Specialist", "80000", "5"),("HR Lead", "130000", "5");

select * from employees
