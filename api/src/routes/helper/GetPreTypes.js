const { KEY } = process.env;
const axios = require("axios");
const { Type } = require("../../db.js");
const typesDit = async function () {
  try {
    const dietType = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&number=5&addRecipeInformation=true`
    );
    const typ = await dietType.data.results.map((e) => e.diets).flat(1);
    let uno = [...new Set(typ)]; //+ velos 0 data repetida
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

module.exports = {
  typesDit,
};
