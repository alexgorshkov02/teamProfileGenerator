const fs = require("fs");
const PageTemplate = require("../lib/PageTemplate.js");

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

  static generatePage(page, data) {
    const manager = data.manager;
    const engineers = data.engineers;
    const interns = data.interns;

    const managerCard = `
    <div class="col s12 m5 l4 xl3">
      <div class="card z-depth-3">
        <div class="card-content blue darken-1 white-text">
          <span class="card-title">${manager.name}</span>
          <span class="card-title">Manager</span>
        </div>

        <div class="card-content blue-grey lighten-5">
          <ul class="collection">
            <li class="collection-item">ID: ${manager.employeeID}</li>
            <li class="collection-item">Email: ${manager.email}</li>
            <li class="collection-item">Office number: ${manager.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
    `;

    let engineerCards = ``;

    engineers.forEach((engineer) => {
      let engineerCard = `
      <div class="col s12 m5 l4 xl3">
        <div class="card z-depth-3">
          <div class="card-content blue darken-1 white-text">
            <span class="card-title">${engineer.name}</span>
            <span class="card-title">Engineer</span>
          </div>
      
          <div class="card-content blue-grey lighten-5">
            <ul class="collection">
              <li class="collection-item">ID: ${engineer.employeeID}</li>
              <li class="collection-item">Email: ${engineer.email}</li>
              <li class="collection-item">Office number: ${engineer.gitHubUsername}</li>
            </ul>
          </div>
        </div>
      </div>
      `;

      engineerCards += engineerCard;
    });

    let internCards = ``;

    interns.forEach((intern) => {
      let internCard = `
      <div class="col s12 m5 l4 xl3">
        <div class="card z-depth-3">
          <div class="card-content blue darken-1 white-text">
            <span class="card-title">${intern.name}</span>
            <span class="card-title">Engineer</span>
          </div>
      
          <div class="card-content blue-grey lighten-5">
            <ul class="collection">
              <li class="collection-item">ID: ${intern.employeeID}</li>
              <li class="collection-item">Email: ${intern.email}</li>
              <li class="collection-item">Office number: ${intern.school}</li>
            </ul>
          </div>
        </div>
      </div>
      `;

      internCards += internCard;
    });

    page += managerCard + engineerCards + internCards;

    return page;
  }
}

module.exports = PageGenerator;
