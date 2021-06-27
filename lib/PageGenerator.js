const fs = require("fs");
const PageTemplate = require("../lib/PageTemplate.js");
// const Employee = require("./Employee.js");

class PageGenerator {
  // Function to write the file
  static writeToFile(data) {
    const initialPage = new PageTemplate().page();
    const footerPage = new PageTemplate().footer();

    let finalPage = this.generatePage(initialPage, data);
    finalPage += footerPage;

    fs.writeFile("./dist/index.html", finalPage, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }

  static renderEmployeeCard(employees) {
    let employeesCards ="";
    // console.log("Employee: " + employees);
    employees.forEach(employee => {
      // console.log(employee);
      const employeeCard = `
      <div class="col s12 m5 l4 xl3" style="margin: auto;">
          <div class="card z-depth-3">
            <div class="card-content blue darken-1 white-text">
              <span class="card-title">${employee.name}</span>
              <span class="card-title">${employee.getRole() === "Manager" ? "Manager": employee.getRole() === "Engineer" ? "Engineer": "Intern"}</span>
            </div>
    
            <div class="card-content blue-grey lighten-5">
              <ul class="collection">
                <li class="collection-item">ID: ${employee.employeeID}</li>
                <li class="collection-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                ${employee.getRole() === "Manager" ? 
                 `<li class="collection-item">Office number: ${employee.officeNumber}</li>` 
                 : employee.getRole() === "Engineer" ? `<li class="collection-item"> Github: <a target="_blank" href="https://github.com/${employee.gitHubUsername}"> ${employee.gitHubUsername} </a></li>`
                 :  `<li class="collection-item">School: ${employee.school}</li>`}
    
              </ul>
            </div>
          </div>
        </div>
        `;

        employeesCards += employeeCard;
    });
    return employeesCards;
  } 

  static generatePage(page, data) {
    const manager = data.manager;
    const engineers = data.engineers;
    const interns = data.interns;

    // console.log("Manager: ", manager);
    const managerCard = this.renderEmployeeCard(manager);
    const engineerCards = this.renderEmployeeCard(engineers);
    const internCards = this.renderEmployeeCard(interns);;

    page += managerCard + engineerCards + internCards;

    return page;
  }
}

module.exports = PageGenerator;
