// services/entityMachine.js
const getPageText = require("../utils/scraper");
const getEntities = require("../api/googleEntity");

module.exports = async function entityMachine(urlA, urlB) {
  try {
    let textA = await getPageText(urlA);
    let textB = await getPageText(urlB);

    console.log("Scraped Text A:", textA); // Log the scraped text
    console.log("Scraped Text B:", textB); // Log the scraped text

    if (!textA || !textB) {
      console.error("One of the URLs did not return valid text.");
      return [null, null]; // Handle error case
    }

    let resultsA = await getEntities(textA);
    let resultsB = await getEntities(textB);

    console.log("Entities Results A:", resultsA);
    console.log("Entities Results B:", resultsB);

    return [resultsA, resultsB]; // Return results directly
  } catch (error) {
    console.error("Error in entityMachine:", error);
    return [null, null]; // Handle error case
  }
};
