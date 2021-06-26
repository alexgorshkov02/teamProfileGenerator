const TeamDataCollector = require("./lib/TeamDataCollector.js");
const PageGenerator = require("./lib/PageGenerator.js");

const main = async () => {
  try {
    const employees = await new TeamDataCollector().init();
    // PageGenerator
    console.log("List of all employees", employees);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

main();
