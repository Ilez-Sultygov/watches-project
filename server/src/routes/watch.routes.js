const router = require('express').Router();
const WatchController = require('../controllers/Watch.controller');
// const AdminWatchController = require('../controllers/AdminWatch.controller');
const isAdmin = require('../middleware/isAdmin')
const verifyAccessToken = require('../middleware/verifyAccessToken')

// const verifyAccessToken = require('../middleware/verifyAccessToken');

router
  //* Метод GET - получить все задачи (запустит функцию контроллер для получения всех задач)
  .get('/', WatchController.getAllWatches)

  //* Метод GET - получить задачу по ID (запустит функцию контроллер для получения задачи по id)
  .get('/:id', WatchController.getWatchById)

  //* Метод POST - создать задачу (запустит функцию контроллер для создания новой задачи)
  .post('/', verifyAccessToken, isAdmin, WatchController.createWatch)

  //* Метод PUT - обновить задачу (запустит функцию контроллер для обновления задачи по id)
  .put('/:id', WatchController.updateWatch)

  //* Метод DELETE - удалить задачу (запустит функцию контроллер для удаления задачи по id)
  .delete('/:id',verifyAccessToken, isAdmin, WatchController.deleteWatch);

module.exports = router;
