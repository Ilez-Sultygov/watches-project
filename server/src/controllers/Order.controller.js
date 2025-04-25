const OrderService = require("../services/Orders.service");
const formatResponse = require("../utils/formatResponse");

class OrderController {
  static async getAllOrdersOfOneUser(req, res) {
    const { id } = req.params;

    try {
      const orders = await OrderService.getAllByUserId(id);
      res.status(200).json(orders);
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async newOrder(req, res) {
    const { user_id, watch_id } = req.body;
    try {
      const order = await OrderService.createNew({user_id, watch_id});
      res.status(200).json(order);
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = OrderController;
