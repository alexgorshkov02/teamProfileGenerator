const Manager = require("../lib/Manager.js");

test("creates a manager object", () => {
  const manager = new Manager("John", 1, "test@test.com", 1);

  expect(manager.name).toBe("John");
  expect(manager.employeeID).toEqual(expect.any(Number));
  expect(manager.email).toBe("test@test.com");
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.role).toBe("Manager");
});

test("gets a manager's office number", () => {
  const manager = new Manager("John", 1, "test@test.com", 1);

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("gets a manager's icon", () => {
  const manager = new Manager("John", 1, "test@test.com", 1);

  expect(manager.getIcon()).toEqual(
    expect.stringContaining(`<i class="fas fa-mug-hot"></i>`)
  );
});
