const { CustomOrder } = require("../db/models");

class CustomOrdersService {
  static async create(data) {
    console.log(data);

    return await CustomOrder.create(data);
  }

  static async getAll(user_id) {
    return await CustomOrder.findAll({ where: { user_id } });
  }

  // static async getById(id) {
  //   return await CustomOrders.findByPk(id);
  // }

  // static async update(id, data) {
  //   const custom = await this.getById(id);
  //   if (custom) {
  //     custom.phone = data.phone;
  //     custom.img_url = data.img_url;
  //     await custom.save();
  //   }
  //   return custom;
  // }

  // static async delete(id) {
  //   const custom = await this.getById(id);
  //   await custom.destroy();
  //   return custom;
  // }
}

module.exports = CustomOrdersService;
