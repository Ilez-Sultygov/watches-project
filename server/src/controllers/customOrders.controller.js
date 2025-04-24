const CustomOrdersService = require('../services/CustomOrders.service');
// const UserService = require('../services/user.service');
const formatResponse = require('../utils/formatResponse');

class CustomOrdersController {
  static async CustomOrder(req, res) {
    const { phone } = req.body;
    const file = req.file;
    // const {user}=res.locals

    if (!phone || !file) {
      return res.status(400).json({ message: "Image and phone are required" });
    }

    try {
      const imageUrl = `/uploads/${file.filename}`;

      const newCustomOrder = await CustomOrdersService.create({
        user_id: 1, // Не забудь позже заменить на реального пользователя
        img_url: imageUrl,
        phone
      });

      // Отправляем правильную структуру ответа
      res.status(200).json(
        formatResponse(
          200,
          "Custom order successfully created",
          {newCustomOrder, imageUrl }
        )
      );
    } catch (err) {
      console.error(err);
      res.status(500).json(
        formatResponse(500, "Failed to create custom order", null, err.message)
      );
    }
  }
}

module.exports = CustomOrdersController;
