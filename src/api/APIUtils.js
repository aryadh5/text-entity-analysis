import axios from "axios";

let getEntities = async (url1, url2) => {
  try {
    const response = await axios.post(API_PATH, {
      urlA: url1,
      urlB: url2,
    });

    // Log the entire response to check its structure
    console.log("API Response:", response.data);

    if (response.data && Array.isArray(response.data)) {
      // Check if the response has valid data
      const urlA = response.data[0] ? response.data[0].slice(0, 10) : []; // Default to empty array if null
      const urlB = response.data[1] ? response.data[1].slice(0, 10) : []; // Default to empty array if null
      return [urlA, urlB];
    } else {
      console.warn("Unexpected response format:", response.data);
      return [[], []]; // Return empty arrays
    }
  } catch (error) {
    console.error("Error in getEntities:", error);
    return [[], []]; // Return empty arrays or handle the error case
  }
};

export default getEntities;
