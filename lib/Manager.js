const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, employeeID, email, officeNumber, role = "Manager") {
    super(name, employeeID, email, role);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
