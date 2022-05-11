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
