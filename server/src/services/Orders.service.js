const { Order, Watch } = require("../db/models");

class OrderService {
  static async getAllByUserId(user_id) {
    return await Order.findAll({
      where: { user_id },
      include: {
        model: Watch,
        attributes: ["id", "model", "price"],
      },
    });
  }
  static async createNew(data) {
    return await Order.create(data)
  }
}

module.exports = OrderService;
