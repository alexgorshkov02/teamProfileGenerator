const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, employeeID, email, officeNumber) {
    super(name, employeeID, email);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
