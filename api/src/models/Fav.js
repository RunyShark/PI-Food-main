const { DataTypes } = require("sequelize");
const { dietasAleatorias } = require("./helper/dietesAleatotias.js");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detalis: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lvl: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
      },
      Types: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: function () {
          return dietasAleatorias();
        },
      },
    },
    { timestamps: false }
  );
};

// step: {
//   type: DataTypes.ARRAY(DataTypes.TEXT),
// },
