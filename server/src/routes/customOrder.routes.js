const router = require("express").Router();
const multer = require("multer");
const CustomOrdersController = require("../controllers/CustomOrders.controller");
const { uploadUser} = require("../middleware/upload");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.get("/userCustomOrders/:id", CustomOrdersController.getCustomOrders);

router.post('/customOrder', verifyAccessToken, uploadUser.single('image'), CustomOrdersController.CustomOrder) 


module.exports = router;
