const { Watch } = require('../db/models/watch');

class WatchService {
  //* Получить все задачи
  static async getAll() {
    return await Watch.findAll();
  }

  //* Найти задачу по ID
  static async getById(id) {
    return await Watch.findByPk(id);
  }

  //* Создать новую задачу
  static async create(data) {
    return await Watch.create(data);
  }

  //* Обновить задачу по ID
  static async update(id, data) {
    const watch = await this.getById(id);
    if (watch) {
      watch.title = data.title;
      watch.body = data.body;
      await watch.save();
    }
    return watch; //* Возвращаем обновлённый объект или null
  }

  //* Удалить задачу по ID
  static async delete(id, userId) {
    const watch = await this.getById(id);
    if (watch) {
      if (watch.authorId !== userId) {
        throw new Error('Unauthorized: Only the author can delete this watch');
      }
      await watch.destroy();
    }
    return watch; //* Возвращаем удалённый объект или null
  }
}

module.exports = WatchService;
