const router = require('express').Router(); 
const customOrderRoutes = require('./customOrder.routes'); 
const formatResponse = require('../utils/formatResponse'); 

router.use('/', customOrderRoutes); 



router.use((req, res) => {
  res.status(404).json(formatResponse(404, 'Not found'));
});

module.exports = router;
