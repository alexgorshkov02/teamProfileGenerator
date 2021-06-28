const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, employeeID, email, school, role = "Intern") {
    super(name, employeeID, email, role);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getIcon() {
    return `<i class="fas fa-user-graduate"></i>`;
  }
}

module.exports = Intern;
