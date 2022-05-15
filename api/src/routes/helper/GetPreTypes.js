// const { KEY } = process.env;
const axios = require("axios");
const { Type } = require("../../db.js");
const typesDit = async function () {
  try {
    const dietType = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9f3302f953754dfd81965c6448364ab7&number=100&addRecipeInformation=true`
    );
    const typ = await dietType.data.results.map((e) => e.diets).flat(1);
    let uno = [...new Set(typ)];
    console.log("types precargadas corectamente");
    console.log(uno);
    uno.forEach((e) => Type.create({ name: e }));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  typesDit,
};
