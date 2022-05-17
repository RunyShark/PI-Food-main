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
const { conn, Type } = require("./src/db.js");
const axios = require("axios");

const typesDit = async function () {
  try {
    const dietType = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=ab6bae2877e8424b927bccf3ff45169b&number=100&addRecipeInformation=true`
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

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 5000, () => {
    typesDit();
    console.log(`(👍 ͡❛ ͜ʖ ͡❛)👍`);
  });
});
