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
        allowNull: false,
      },
      detalis: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      score: {
        type: DataTypes.STRING,
      },
      lvl: {
        type: DataTypes.STRING,
        allowNull: false,
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
