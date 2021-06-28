const inquirer = require("inquirer");

const Questions = require("../lib/Questions");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class TeamDataCollector {
  constructor(employees = []) {
    this.employees = employees;
  }

  async init() {
    return new Promise(async (resolve, reject) => {
      try {
        const questions = new Questions("manager");

        // Ask general questions
        const generalAnswers = await inquirer.prompt(
          questions.generalQuestions()
        );
        const { name, employeeID, email } = generalAnswers;

        // Ask the questions about a manager
        const managerSpecificAnswers = await inquirer.prompt(
          questions.managerSpecificQuestions()
        );
        const { officeNumber } = managerSpecificAnswers;

        const manager = new Manager(name, employeeID, email, officeNumber);
        console.table(manager);
        this.employees.push(manager);
        const results = await this.mainMenu();
        resolve(results);
      } catch (error) {
        reject(error);
      }
    });
  }

  async mainMenu() {
    return new Promise(async (resolve, reject) => {
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
        console.log(`Just log. The chosen action: ${nextAction.action}`);
        // console.log(nextAction.action);
        if (nextAction.action === "Add an engineer") {
          //   console.log(`"Add an engineer option" is chosen`);
          resolve(await this.addEngineer());
        } else if (nextAction.action === "Add an intern") {
          //   console.log(`"Add an intern" is chosen`);
          resolve(await this.addIntern());
        } else if (nextAction.action === "Finish building my team") {
          resolve(this.getEmployees());
        } else {
          console.log("Error: Something is wrong with the menu options");
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  async addEngineer() {
    return new Promise(async (resolve, reject) => {
      try {
        const questions = new Questions("engineer");

        // Ask general questions
        const generalAnswers = await inquirer.prompt(
          questions.generalQuestions()
        );
        const { name, employeeID, email } = generalAnswers;

        // Ask the questions about an engineer
        const engineerSpecificAnswers = await inquirer.prompt(
          questions.engineerSpecificQuestions()
        );
        const { gitHubUsername } = engineerSpecificAnswers;

        const engineer = new Engineer(name, employeeID, email, gitHubUsername);
        console.table(engineer);
        this.employees.push(engineer);
        const returnToMainMenu = await this.mainMenu();
        resolve(returnToMainMenu);
      } catch (error) {
        reject(error);
      }
    });
  }

  async addIntern() {
    return new Promise(async (resolve, reject) => {
      try {
        const questions = new Questions("intern");

        // Ask general questions
        const generalAnswers = await inquirer.prompt(
          questions.generalQuestions()
        );
        const { name, employeeID, email } = generalAnswers;

        // Ask the questions about an intern
        const internSpecificAnswers = await inquirer.prompt(
          questions.internSpecificQuestions()
        );
        const { school } = internSpecificAnswers;

        const intern = new Intern(name, employeeID, email, school);
        console.table(intern);
        this.employees.push(intern);
        resolve(await this.mainMenu());
      } catch (error) {
        reject(error);
      }
    });
  }

  getEmployees() {
    return this.employees;
  }
}

module.exports = TeamDataCollector;
