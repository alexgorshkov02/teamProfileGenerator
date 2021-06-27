const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, employeeID, email, gitHubUsername) {
    super(name, employeeID, email);
    this.gitHubUsername = gitHubUsername;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;