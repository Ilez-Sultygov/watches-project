const CustomOrdersService = require("../services/CustomOrders.service");
// const UserService = require('../services/user.service');
const formatResponse = require("../utils/formatResponse");

class CustomOrdersController {
  static async CustomOrder(req, res) {
    const { phone } = req.body;
    const file = req.file;


    const { user } = res.locals;


    if (!phone || !file) {
      return res.status(400).json({ message: "Image and phone are required" });
    }

    try {
      const imageUrl = `${file.filename}`;

      const newCustomOrder = await CustomOrdersService.create({
        user_id: user.id, // Не забудь позже заменить на реального пользователя
        img_url: imageUrl,
        phone,
      });

      // Отправляем правильную структуру ответа
      res.status(200).json(
        formatResponse(200, "Custom order successfully created", {
          newCustomOrder,
          imageUrl,
        })
      );
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json(
          formatResponse(
            500,
            "Failed to create custom order",
            null,
            err.message
          )
        );
    }
  }

  static async getCustomOrders(req, res) {
    const { id } = req.params;
    try {
      const response = await CustomOrdersService.getAll(id);
      res.status(200).json(response);
    } catch (error) {
      console.log("ошибка при получении данных", error);
    }
  }
}

module.exports = CustomOrdersController;
