const router = require("express").Router();
const multer = require("multer");
const CustomOrdersController = require("../controllers/CustomOrders.controller");
const { upload } = require("../middleware/upload");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.post(
  "/customOrder",
  upload.single("image"),
  CustomOrdersController.CustomOrder
);
router.get("/userCustomOrders/:id", CustomOrdersController.getCustomOrders);

module.exports = router;
