//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const axios = require("axios");

const { Type } = require("../../db.js");

const typesDit = async function () {
  try {
    const dietType = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=aa8a0c61d28f46c7a8b1705636db7594&number=100&addRecipeInformation=true`
    );
    const typ = await dietType.data.results.map((e) => e.diets).flat(1);
    let uno = [...new Set(typ)];

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
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 5000, () => {
    typesDit();
    console.log(`(👍 ͡❛ ͜ʖ ͡❛)👍`);
  });
});
