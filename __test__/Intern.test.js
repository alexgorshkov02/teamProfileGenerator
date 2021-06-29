const Intern = require("../lib/Intern.js");

test("creates an intern object", () => {
  const intern = new Intern("John", 1, "test@test.com", "testSchool");

  expect(intern.name).toBe("John");
  expect(intern.employeeID).toEqual(expect.any(Number));
  expect(intern.email).toBe("test@test.com");
  expect(intern.school).toBe("testSchool");
  expect(intern.role).toBe("Intern");
});

test("gets an intern's school", () => {
  const intern = new Intern("John", 1, "test@test.com", "testSchool");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("gets an intern's icon", () => {
  const intern = new Intern("John", 1, "test@test.com", "testSchool");

  expect(intern.getIcon()).toEqual(
    expect.stringContaining(`<i class="fas fa-user-graduate"></i>`)
  );
});
