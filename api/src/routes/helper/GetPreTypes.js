// const { KEY } = process.env;
const axios = require("axios");
const { Type } = require("../../db.js");
const typesDit = async function () {
  try {
    const dietType = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=06713865e5b04e40a2b774024d19b58f&number=100&addRecipeInformation=true`
    );
    const typ = await dietType.data.results.map((e) => e.diets).flat(1);
    let uno = [...new Set(typ)];

    // uno.forEach((e) =>
    //   Type.findOrCreate({
    //     where: {
    //       name: e,
    //     },
    //   })
    // );
    await uno.map((e) => {
      Type.create({ name: e });
    });
  } catch (error) {
    console.log(error);
  }
};
typesDit();
module.exports = {
  typesDit,
};
