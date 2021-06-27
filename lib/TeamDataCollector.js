const inquirer = require("inquirer");

const Questions = require("../lib/Questions");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class TeamDataCollector {
  constructor() {
    this.manager = [];
    this.engineers = [];
    this.interns = [];
  }

  async init() {
    return new Promise(async (resolve, reject) => {
      try {
        const answers = await inquirer.prompt(Questions.questionsAboutManager);
        const { name, employeeID, email, officeNumber } = answers;
        const manager = new Manager(name, employeeID, email, officeNumber);
        console.table(manager);
        this.manager.push(manager);
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
          resolve(this.finish());
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
        const answers = await inquirer.prompt(Questions.questionsAboutEngineer);
        const { name, employeeID, email, gitHubUsername } = answers;
        const engineer = new Engineer(name, employeeID, email, gitHubUsername);
        console.table(engineer);
        this.engineers.push(engineer);
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
        const answers = await inquirer.prompt(Questions.questionsAboutIntern);
        const { name, employeeID, email, school } = answers;
        const intern = new Intern(name, employeeID, email, school);
        console.table(intern);
        this.interns.push(intern);
        resolve(await this.mainMenu());
      } catch (error) {
        reject(error);
      }
    });
  }

  finish() {
    // console.log("Manager: ", this.manager);
    // console.log("Engineers: ", this.engineers);
    // console.log("Interns: ", this.interns);
    return {
      manager: this.manager,
      engineers: this.engineers,
      interns: this.interns,
    };
  }
}

module.exports = TeamDataCollector;
