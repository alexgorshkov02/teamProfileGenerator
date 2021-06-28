const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, employeeID, email, school, role = "Intern") {
    super(name, employeeID, email, role);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;