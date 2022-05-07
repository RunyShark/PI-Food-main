const axios = require("axios");
const { KEY } = process.env;

const getApiId = async (id) => {
  try {
    const getApiI = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}`
    );
    return {
      id: getApiI.id,
      name: getApiI.title,
      detalisn: getApiI.summary,
      score: getApiI.spoonacularScore,
      lvl: getApiI.healthScore,
      step: getApiI.image,
      Types: getApiI.diets,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getApiId,
};
