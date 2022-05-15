const { KEY } = process.env;
const axios = require("axios");
const { Type } = require("../../db.js");

const typesDit = async function () {
  try {
    const dietType = await axios.get(
      `https:api.spoonacular.com/recipes/complexSearch?apiKey=d96f10caa842427da7a35a13eb53d2d9&number=100&addRecipeInformation=true`
    );
    const typ = await dietType.data.results.map((e) => e.diets).flat(1);
    let uno = [...new Set(typ)];
    console.log("types precargadas corectamente");
    console.log(uno);
    uno.forEach((e) =>
      Type.findOrCreate({
        where: {
          name: e,
        },
      })
    );
  } catch (error) {
    console.log(error);
  }
};

typesDit();

module.exports = {
  typesDit,
};
