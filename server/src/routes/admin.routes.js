const router = require("express").Router();
const multer  = require('multer');
const AdminWatchController = require("../controllers/AdminWatch.controller");
const { uploadAdmin } = require('../middleware/upload')
const verifyAccessToken = require('../middleware/verifyAccessToken')
const isAdmin = require('../middleware/isAdmin')


router.post("/adminProfile", verifyAccessToken, uploadAdmin.single('image'), AdminWatchController.AdminOrder);
router.get('/watches:id', verifyAccessToken, isAdmin, AdminWatchController.AdminDelete)


module.exports = router;