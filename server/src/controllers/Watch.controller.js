
const WatchService = require('../services/Watch.service');


class WatchController {
  // Получить все часы
  async getAllWatches(req, res) {
    try {
      const watches = await WatchService.getAll();
      res.json(watches);
    } catch (error) {
      console.error('Error fetching watches:', error);
      res.status(500).json({ error: 'Failed to get watches' });
    }
  }

  // Получить часы по ID
  async getWatchById(req, res) {
    try {
      const watch = await WatchService.getById(req.params.id);
      if (!watch) {
        return res.status(404).json({ error: 'Watch not found' });
      }
      res.json(watch);
    } catch (error) {
      console.error('Error fetching watch:', error);
      res.status(500).json({ error: 'Failed to get watch' });
    }
  }

  // Создать новые часы
  async createWatch(req, res) {
    try {
      // Базовая валидация
      if (!req.body.name || !req.body.description || !req.body.price || !req.body.image) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const price = parseFloat(req.body.price);
      if (isNaN(price)) {
        return res.status(400).json({ error: 'Price must be a number' });
      }

      const watchData = {
        name: req.body.name,
        description: req.body.description,
        price: price,
        image: req.body.image,
      };

      const newWatch = await WatchService.create(watchData);
      res.status(201).json(newWatch);
    } catch (error) {
      console.error('Error creating watch:', error);
      res.status(400).json({ error: 'Failed to create watch' });
    }
  }

  // Обновить часы
  async updateWatch(req, res) {
    try {
      // Базовая валидация
      if (!req.body.name || !req.body.description || !req.body.price || !req.body.image) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const price = parseFloat(req.body.price);
      if (isNaN(price)) {
        return res.status(400).json({ error: 'Price must be a number' });
      }

      const watchData = {
        name: req.body.name,
        description: req.body.description,
        price: price,
        image: req.body.image,
      };

      const updatedWatch = await WatchService.update(req.params.id, watchData);

      if (!updatedWatch) {
        return res.status(404).json({ error: 'Watch not found' });
      }

      res.json(updatedWatch);
    } catch (error) {
      console.error('Error updating watch:', error);
      res.status(500).json({ error: 'Failed to update watch' });
    }
  }

  // Удалить часы
  // async deleteWatch(req, res) {
  //   try {
  //     const userId = req.user?.id; // Предполагается наличие аутентификации

  //     const deletedWatch = await WatchService.delete(req.params.id, userId);

  //     if (!deletedWatch) {
  //       return res.status(404).json({ error: 'Watch not found' });
  //     }

  //     res.status(204).send();
  //   } catch (error) {
  //     console.error('Error deleting watch:', error);

  //     if (error.message.includes('Unauthorized')) {
  //       return res.status(403).json({ error: error.message });
  //     }

  //     res.status(500).json({ error: 'Failed to delete watch' });
  //   }
  // }

 async deleteWatch(req, res) {
    try {
      const { id } = req.params;

      const deletedWatch = await WatchService.delete(id);

      if (!deletedWatch) {
        return res.status(404).json({
          status: 404,
          message: "Часы не найдены",
        });
      }

      res.status(200).json({
        status: 200,
        message: "Часы успешно удалены",
      });
    } catch (err) {
      console.error("Ошибка удаления часов:", err.message);
      res.status(500).json({
        status: 500,
        message: "Ошибка на сервере",
      });
    }
  }

  // Покупка часов
  async purchaseWatch(req, res) {
    try {
      const watch = await WatchService.getById(req.params.id);
      if (!watch) {
        return res.status(404).json({ error: 'Watch not found' });
      }

      // Простая логика покупки
      res.json({
        success: true,
        message: 'Purchase successful',
        watch: {
          id: watch.id,
          name: watch.name,
          price: watch.price,
        },
      });
    } catch (error) {
      console.error('Error processing purchase:', error);
      res.status(500).json({ error: 'Failed to process purchase' });
    }
  }
}

module.exports = new WatchController();
