const TeamDataCollector = require("./src/TeamDataCollector.js");
const PageGenerator = require("./src/PageGenerator.js");

const main = async () => {
  try {
    const employees = await new TeamDataCollector().init();
    console.log("List of all employees", employees);
    
    PageGenerator.writeToFile(employees);

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