const router = require('express').Router();
const authRoutes = require('./auth.routes');
const watchRoutes = require('./watch.routes');
const formatResponse = require('../utils/formatResponse');
router.use('/auth', authRoutes);
router.use('/watch', watchRoutes);
router.use('*', (req, res) => {
  res.status(404).json(formatResponse(404, 'Not found'));
});
module.exports = router;
