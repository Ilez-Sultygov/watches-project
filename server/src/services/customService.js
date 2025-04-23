const { CustomOrder } = require('../db/models');

//NOTE Почему не использовать `try/catch` в сервисах:

class CustomOrderService {

  static async getById(id) {
    return await CustomOrder.findByPk(id);
  }


  static async create(data) {
    return await CustomOrder.create(data);
  }

  static async update(id, data) {
    const task = await this.getById(id);
    if (task) {
      task.title = data.title;
      task.body = data.body;
      await task.save();
    }
    return task; 
  }


  static async delete(id, userId) {
    const task = await this.getById(id);
    if (task) {
      if (task.authorId !== userId) {
        throw new Error('Unauthorized: Only the author can delete this task');
      }
      await task.destroy();
    }
    return task; //* Возвращаем удалённый объект или null
  }
}

module.exports = TaskService;
