const Manager = require("../lib/Manager.js");

test("creates a manager object", () => {
  const manager = new Manager("John", 1, "test@test.com", 1);

  expect(manager.name).toBe("John");
  expect(manager.employeeID).toEqual(expect.any(Number));
  expect(manager.email).toBe("test@test.com");
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.role).toBe("Manager");
});

test("gets an manager's office number", () => {
  const manager = new Manager("John", 1, "test@test.com", 1);

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("gets an intern's icon", () => {
  const manager = new Manager("John", 1, "test@test.com", 1);

  expect(manager.getIcon()).toEqual(
    expect.stringContaining(`<i class="fas fa-mug-hot"></i>`)
  );
});
