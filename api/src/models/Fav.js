const { DataTypes } = require("sequelize");

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
      step: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      Types: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
    },
    { timestamps: false }
  );
};
