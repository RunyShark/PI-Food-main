const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Diet",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
