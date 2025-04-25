"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomOrder extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  CustomOrder.init(
    {
      user_id: DataTypes.INTEGER,
      img_url: DataTypes.STRING,
      phone:DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CustomOrder",
    }
  );
  return CustomOrder;
};
