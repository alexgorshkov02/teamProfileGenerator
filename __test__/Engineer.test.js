const Engineer = require("../lib/Engineer.js");

test("creates a engineer object", () => {
  const engineer = new Engineer(
    "John",
    1,
    "test@test.com",
    "testGitHubUsername"
  );

  expect(engineer.name).toBe("John");
  expect(engineer.employeeID).toEqual(expect.any(Number));
  expect(engineer.email).toBe("test@test.com");
  expect(engineer.gitHubUsername).toBe("testGitHubUsername");
  expect(engineer.role).toBe("Engineer");
});

test("gets an engineer's school", () => {
  const engineer = new Engineer(
    "John",
    1,
    "test@test.com",
    "testGitHubUsername"
  );

  expect(engineer.getGitHubUsername()).toEqual(
    expect.stringContaining(engineer.gitHubUsername.toString())
  );
});

test("gets an engineer's icon", () => {
  const engineer = new Engineer(
    "John",
    1,
    "test@test.com",
    "testGitHubUsername"
  );

  expect(engineer.getIcon()).toEqual(
    expect.stringContaining(`<i class="fas fa-glasses"></i>`)
  );
});
