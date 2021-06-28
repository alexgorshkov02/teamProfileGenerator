const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, employeeID, email, gitHubUsername, role = "Engineer") {
    super(name, employeeID, email, role);
    this.gitHubUsername = gitHubUsername;
  }

  getGitHubUsername() {
    return this.gitHubUsername;
  }
}

module.exports = Engineer;