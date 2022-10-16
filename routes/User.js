const express = require("express");
const router = express.Router();
const {getAllUsers} = require("../controller/GetAllUsers");
const {isAdmin} = require("../middleware/IsAdmin");
const { isSignedIn } = require("../middleware/IsSignedIn");




router.get("/user",isSignedIn,isAdmin,getAllUsers);


module.exports = router;