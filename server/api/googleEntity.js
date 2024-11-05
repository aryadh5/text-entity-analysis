// api/googleEntity.js
const fetch = require("node-fetch");
require("dotenv").config();

module.exports = async function getEntities(text) {
  const config = {
    encodingType: "UTF8",
    document: {
      type: "PLAIN_TEXT",
      content: text,
    },
  };

  try {
    const response = await fetch(
      `https://language.googleapis.com/v1/documents:analyzeEntities?key=${process.env.API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify(config),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("Google API Response:", data); // Log the response from Google API
    return data.entities || []; // Return entities or an empty array if undefined
  } catch (error) {
    console.error("Error in getEntities:", error);
    return []; // Return empty array on error
  }
};
