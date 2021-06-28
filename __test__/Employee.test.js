const Employee = require("../lib/Employee.js");

test("creates a employee object", () => {
  const employee = new Employee("John", 1, "test@test.com", "employee");

  expect(employee.name).toBe("John");
  expect(employee.employeeID).toEqual(expect.any(Number));
  expect(employee.email).toBe("test@test.com");
  expect(employee.role).toBe("employee");
});

test("gets an employee's name", () => {
  const employee = new Employee("John", 1, "test@test.com", "employee");

  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.name.toString())
  );
});

test("gets an employee's employee ID", () => {
  const employee = new Employee("John", 1, "test@test.com", "employee");

  expect(employee.getEmployeeID()).toEqual(expect.any(Number));
});

test("gets an employee's email", () => {
  const employee = new Employee("John", 1, "test@test.com", "employee");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

test("gets an employee's role", () => {
  const employee = new Employee("John", 1, "test@test.com", "employee");

  expect(employee.getRole()).toEqual(
    expect.stringContaining(employee.role.toString())
  );
});
