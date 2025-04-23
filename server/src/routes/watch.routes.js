const router = require('express').Router();
const WatchController = require('../controllers/Watch.controller');
const verifyAccessToken = require('../middleware/verifyAccessToken');

router
  //* Метод GET - получить все задачи (запустит функцию контроллер для получения всех задач)
  .get('/', WatchController.getAllWatches)

  //* Метод GET - получить задачу по ID (запустит функцию контроллер для получения задачи по id)
  .get('/:id', WatchController.getWatchById)

  //* Метод POST - создать задачу (запустит функцию контроллер для создания новой задачи)
  .post('/', verifyAccessToken, WatchController.createWatch)

  //* Метод PUT - обновить задачу (запустит функцию контроллер для обновления задачи по id)
  .put('/:id', verifyAccessToken, WatchController.updateWatch)

  //* Метод DELETE - удалить задачу (запустит функцию контроллер для удаления задачи по id)
  .delete('/:id', verifyAccessToken, WatchController.deleteWatch);

module.exports = router;
