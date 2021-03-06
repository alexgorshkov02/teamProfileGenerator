const TeamDataCollector = require("./src/TeamDataCollector.js");
const PageGenerator = require("./src/PageGenerator.js");

const main = async () => {
  try {
    // Prompt and collect all employees
    const employees = await new TeamDataCollector().init();

    // Generate a page for all employees
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
