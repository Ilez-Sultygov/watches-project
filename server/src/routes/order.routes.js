const router = require("express").Router();
const OrderController = require("../controllers/Order.controller");

router.get("/userOrders/:id", OrderController.getAllOrdersOfOneUser);
router.post('/addNew', OrderController.newOrder)

module.exports = router;
