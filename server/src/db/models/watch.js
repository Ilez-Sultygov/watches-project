"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Watch extends Model {
    static associate(models) {
      this.belongsToMany(models.User, {
        foreignKey: "watch_id",
        through: "models.Order",
      });
    }
  }
  Watch.init(
    {
      model: DataTypes.STRING,
      img: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Watch",
    }
  );
  return Watch;
};
