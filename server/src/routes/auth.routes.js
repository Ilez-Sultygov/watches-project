const router = require("express").Router();
const AuthController = require("../controllers/Auth.controller");

router.post("/signUp", AuthController.signUp);
router.post("/signIn", AuthController.signIn);
router.post("/signOut", AuthController.signOut);

module.exports = router;
