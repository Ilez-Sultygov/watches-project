const { Order, Watch, User } = require("../db/models");

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
}

module.exports = OrderService;
