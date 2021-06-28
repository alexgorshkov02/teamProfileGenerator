const TeamDataCollector = require("../src/TeamDataCollector.js");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

jest.mock("../lib/Manager.js");
jest.mock("../lib/Engineer.js");
jest.mock("../lib/Intern.js");

test("creates a TeamDataCollector object", () => {
  const collector = new TeamDataCollector([
    new Manager(),
    new Engineer(),
    new Intern(),
  ]);

  expect(collector.employees).toEqual(
    expect.arrayContaining([new Manager(), new Engineer(), new Intern()])
  );
});

test("gets an array of employees", () => {
  const collector = new TeamDataCollector([
    new Manager(),
    new Engineer(),
    new Intern(),
  ]);

  expect(collector.getEmployees()).toEqual(
    expect.arrayContaining([new Manager(), new Engineer(), new Intern()])
  );
});
