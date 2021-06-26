const inquirer = require("inquirer");

const Manager = require("../lib/Manager");
const Questions = require("../lib/Questions");

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

  mainMenu() {

  }
}

module.exports = PageGenerator;
