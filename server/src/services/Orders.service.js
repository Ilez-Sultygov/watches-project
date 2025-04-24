const { Order, Watch } = require("../db/models");

class OrderService {
  static async getAllByUserId(user_id) {
    return await Order.findAll({
      where: { user_id },
    });
  }
}

module.exports = OrderService;
