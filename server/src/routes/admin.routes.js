const router = require("express").Router();
const multer  = require('multer');
const AdminWatchController = require("../controllers/AdminWatch.controller");
const { upload } = require('../middleware/upload')
const verifyAccessToken=require('../middleware/verifyAccessToken')


router.post("/adminProfile", verifyAccessToken, upload.single('image'),AdminWatchController.AdminOrder);


module.exports = router;