const router = require("express").Router();
const authRoutes = require("./auth.routes");
const watchRoutes = require("./watch.routes");
const customOrderRoutes = require("./customOrder.routes");
const orderRoutes = require("./order.routes");
const formatResponse = require("../utils/formatResponse");
const adminProfileRoutes = require('./admin.routes')

router.use('/auth', authRoutes);
router.use('/watch', watchRoutes);
router.use('/', customOrderRoutes); 
router.use('/', adminProfileRoutes); 
router.use("/orders", orderRoutes);
router.use((req, res) => {
  res.status(404).json(formatResponse(404, "Not found"));
});

module.exports = router;
