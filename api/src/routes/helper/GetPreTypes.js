const { KEY } = process.env;
const axios = require("axios");

const typesDit = async function () {
  try {
    const dietType = await axios.get(
      `https:api.spoonacular.com/recipes/complexSearch?apiKey=06713865e5b04e40a2b774024d19b58f&number=50&addRecipeInformation=true`
    );
    const typ = await dietType.data.results.map((e) => e.diets).flat(1);
    return [...new Set(typ)];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  typesDit,
};
