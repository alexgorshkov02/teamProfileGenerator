const fs = require("fs");
const PageTemplate = require("../src/PageTemplate.js");
// const Employee = require("./Employee.js");

class PageGenerator {
  // Function to write the file
  static writeToFile(employees) {
    const initialPage = new PageTemplate().page();
    const footerPage = new PageTemplate().footer();
    const finalPage = this.generatePage(initialPage, footerPage, employees);

    fs.writeFile("./dist/index.html", finalPage, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }

  static renderEmployeeCard(employees) {
    let employeesCards = "";
    // console.log("Employee: " + employees);
    employees.forEach((employee) => {
      // console.log(employee);
      const employeeCard = `
      <div class="col s12 m5 l4 xl3" style="margin: auto;">
          <div class="card z-depth-3">
            <div class="card-content blue darken-1 white-text">
              <span class="card-title">${employee.getName()}</span>
              <span class="card-title">${employee.getRole()}</span>
            </div>
    
            <div class="card-content blue-grey lighten-5">
              <ul class="collection">
                <li class="collection-item">ID: ${employee.getEmployeeID()}</li>
                <li class="collection-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>

                <!-- The last item which depends on an employee's role -->
                ${
                  employee.getRole() === "Manager"
                    ? `<li class="collection-item">Office number: ${employee.getOfficeNumber()}</li>`
                    : employee.getRole() === "Engineer"
                    ? `<li class="collection-item"> Github: <a target="_blank" href="https://github.com/${employee.getGitHubUsername()}"> ${employee.getGitHubUsername()} </a></li>`
                    : employee.getRole() === "Intern"
                    ? `<li class="collection-item">School: ${employee.getSchool()}</li>`
                    : `<li class="collection-item"></li>`
                }
    
              </ul>
            </div>
          </div>
        </div>
        `;

      employeesCards += employeeCard;
    });
    return employeesCards;
  }

  static generatePage(initialPage, footerPage, employees) {
    const employeesCards = this.renderEmployeeCard(employees);
    const page = initialPage + employeesCards + footerPage;

    return page;
  }
}

module.exports = PageGenerator;
