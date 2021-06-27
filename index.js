const TeamDataCollector = require("./lib/TeamDataCollector.js");
const PageGenerator = require("./lib/PageGenerator.js");
const PageTemplate = require("./lib/PageTemplate.js");

const main = async () => {
  try {
    const employeesList = await new TeamDataCollector().init();
    console.log("List of all employees", employeesList);
    
    PageGenerator.writeToFile(employeesList);

  } catch (error) {
    if (error.isTtyError) {
      console.log(
        `Error: Prompt couldn't be rendered in the current environment`
      );
    } else {
      console.log(`Error: ${error}`);
    }
  }
};

main();
