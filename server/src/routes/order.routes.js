const router = require("express").Router();
const OrderController = require("../controllers/Order.controller");

router.get("/userOrders/:id", OrderController.getAllOrdersOfOneUser);

module.exports = router;
