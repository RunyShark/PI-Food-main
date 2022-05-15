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
const model = require("../api/src/routes/helper/GetPreTypes.js");

const dietLoader = async function () {
  const dietsApi = await model.typesDit();
  try {
    dietsApi.forEach((e) =>
      Type.findOrCreate({
        where: {
          name: e,
        },
      })
    );
  } catch (e) {
    console.log(e);
  }
};

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    dietLoader();

    console.log(`(👍 ͡❛ ͜ʖ ͡❛)👍`);
  });
});
