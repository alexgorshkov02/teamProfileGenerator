const inquirer = require("inquirer");

const Questions = require("../lib/Questions");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


class PageGenerator {
  async init() {
    try {
      const answers = await inquirer.prompt(Questions.questionsAboutManager);
      const { name, employeeID, email, officeNumber } = answers;
      const manager = new Manager(name, employeeID, email, officeNumber);
      console.table(manager);
      this.mainMenu();
    } catch (error) {
      if (error.isTtyError) {
        console.log(
          `Error: Prompt couldn't be rendered in the current environment`
        );
      } else {
        console.log(`Error: ${error}`);
      }
    }
  }

  async mainMenu() {
    try {
      const nextAction = await inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building my team",
        ],
      });
      console.log("testTest123");
      console.log(nextAction.action);
      if ((nextAction.action === "Add an engineer")) {
        this.addEngineer();
      } else if ((nextAction.action === "Add an intern")) {
          console.log("testTest");
        this.addIntern();
      } else if ((nextAction.action === "Finish building my team")) {
        this.finish();
      } else {
        console.log("Error: Something is wrong with the menu options");
      }
    } catch (error) {
      if (error.isTtyError) {
        console.log(
          `Error: Prompt couldn't be rendered in the current environment`
        );
      } else {
        console.log(`Error: ${error}`);
      }
    }
  }

  async addEngineer() {
    try {
        const answers = await inquirer.prompt(Questions.questionsAboutEngineer);
        const { name, employeeID, email, gitHubUsername } = answers;
        const engineer = new Engineer(name, employeeID, email, gitHubUsername);
        console.table(engineer);
        this.mainMenu();
      } catch (error) {
        if (error.isTtyError) {
          console.log(
            `Error: Prompt couldn't be rendered in the current environment`
          );
        } else {
          console.log(`Error: ${error}`);
        }
      }
  }

  async addIntern() {
    try {
        const answers = await inquirer.prompt(Questions.questionsAboutIntern);
        const { name, employeeID, email, school } = answers;
        const intern = new Intern(name, employeeID, email, school);
        console.table(intern);
        this.mainMenu();
      } catch (error) {
        if (error.isTtyError) {
          console.log(
            `Error: Prompt couldn't be rendered in the current environment`
          );
        } else {
          console.log(`Error: ${error}`);
        }
      }
  }

}

module.exports = PageGenerator;
