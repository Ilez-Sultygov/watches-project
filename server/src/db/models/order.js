"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.Watch, { foreignKey: "watch_id" });
      this.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      watch_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
