const WatchService = require('../services/Watch.service');
// const UserService = require('../services/user.service');
const formatResponse = require('../utils/formatResponse');

class AdminWatchController {
  static async AdminOrder(req, res) {
    const { model } = req.body;
    const { description } = req.body;
    const { price } = req.body;
    const file = req.file;
    const {user}=res.locals

    if (!model || !description||!price||!file) {
      return res.status(400).json({ message: "Необходимо ввести модель, описание, цену и загрузить файл" });
    }

    try {
      const imageAd = `${file.filename}`;

      const newAdminOrder = await WatchService.create({
        user_id: user.id, // Не забудь позже заменить на реального пользователя
        img: imageAd,
        model,
        description,
        price,
      });

      // Отправляем правильную структуру ответа
      res.status(200).json(
        formatResponse(
          200,
          "Admin order successfully created",
          {newAdminOrder, imageAd }
        )
      );
    } catch (err) {
      console.error(err);
      res.status(500).json(
        formatResponse(500, "Failed to create admin order", null, err.message)
      );
    }
  }
}

module.exports = AdminWatchController;