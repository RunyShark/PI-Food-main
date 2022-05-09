const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Type",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
            arg: 10,
            msg: "debe de ser un numero = 10 o > 10",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
