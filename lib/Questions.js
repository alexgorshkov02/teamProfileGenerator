class Questions {
  constructor(employee) {
    this.employee = employee;
  }

  generalQuestions() {
    return [
      {
        type: "text",
        name: "name",
        message: `What is the ${this.employee}’s name? (Required)`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter the ${this.employee}’s name!`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "employeeID",
        message: `What is the ${this.employee}’s employee ID? (Required)`,
        validate: (employeeIDInput) => {
          if (this.validateEmployeeID(employeeIDInput)) {
            return true;
          } else {
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            console.log("Please enter a valid employee ID! (Only numbers are allowed)");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: `What is the ${this.employee}’s email address?`,
        validate: (emailInput) => {
          if (emailInput === "" || this.validateEmail(emailInput)) {
            return true;
          } else {
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            console.log("Please enter a valid email!");
            return false;
          }
        },
      },
    ];
  }

  managerSpecificQuestions() {
    return [
      {
        type: "text",
        name: "officeNumber",
        message: "What is the manager’s office number?",
      },
    ];
  }

  engineerSpecificQuestions() {
    return [
      {
        type: "text",
        name: "gitHubUsername",
        message: "What is the engineer’s GitHub username?",
      },
    ];
  }

  internSpecificQuestions() {
    return [
      {
        type: "text",
        name: "school",
        message: "What is the intern’s school?",
      },
    ];
  }

  // Function to validate an email
  validateEmail(emailInput) {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(emailInput).toLowerCase());
  }

  // Function to validate an email
  validateEmployeeID(employeeIDInput) {
    const regEx =
      /^\d+$/;
    return regEx.test(employeeIDInput);
  }
}

module.exports = Questions;
