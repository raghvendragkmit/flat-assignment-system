const express = require("express")
const router = express.Router()
const { login } = require("../controller/Login")
const { signup } = require("../controller/Signup")
const { isEmailExist } = require("../middleware/IsEmailExist")
const { signout } = require("../controller/Signout")
const { checkUserType } = require("../middleware/CheckUserType")
router.post("/signup", checkUserType, isEmailExist, signup)
router.post("/login", login)
router.get("/signout", signout)

module.exports = router
