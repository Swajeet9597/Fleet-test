const express = require("express")
const router = express.Router()
const auth = require("../controllers/authController")
const authToken = require("../middlewares/authMiddleware")

router.post("/register",auth.addUser)
router.post("/login",auth.checkUser)
router.post("/checkLogin",authToken,auth.checkLogin)

module.exports = router;