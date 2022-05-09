const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      detalis: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: {
          arg: true,
          mse: "Solo se aceptan letras",
        },
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validator: {
          isNumeric: {
            arg: true,
            msg: "Solo numero, no se aceptan strins",
          },
          max: {
            arg: 100,
            msg: "debe de ser un numero = 100 o < 100",
          },
          min: {
            arg: 1,
            msg: "debe de ser un numero = 1 o > 1",
          },
        },
      },
      lvl: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
          isNumeric: {
            arg: true,
            msg: "Solo numero, no se aceptan strins",
          },
          max: {
            arg: 100,
            msg: "debe de ser un numero = 100 o < 100",
          },
          min: {
            arg: 1,
            msg: "debe de ser un numero = 1 o > 1",
          },
        },
      },
      step: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
