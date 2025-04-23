const router = require('express').Router();
const multer  = require('multer');
const CustomOrdersController = require("../controllers/customOrders.controller");
const { upload } = require('../middleware/upload')



router.post('/customOrder', upload.single('image'), CustomOrdersController.CustomOrder) 

module.exports = router;