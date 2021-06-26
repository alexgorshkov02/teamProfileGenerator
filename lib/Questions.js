class Questions {
  static questionsAboutManager = [
    {
      type: "text",
      name: "name",
      message: "What is your manager’s name?",
    },
    {
      type: "text",
      name: "employeeID",
      message: "What is your manager’s employee ID?",
    },
    {
      type: "text",
      name: "email",
      message: "What is your manager’s email address?",
    },
    {
      type: "text",
      name: "officeNumber",
      message: "What is your manager’s office number?",
    },
  ];

  static questionsAboutEngineer = [
    {
      type: "text",
      name: "name",
      message: "What is an engineer’s name?",
    },
    {
      type: "text",
      name: "employeeID",
      message: "What is an engineer’s ID?",
    },
    {
      type: "text",
      name: "email",
      message: "What is an engineer’s email address?",
    },
    {
      type: "text",
      name: "gitHubUsername",
      message: "What is an engineer’s GitHub username?",
    },
  ];
}

module.exports = Questions;
