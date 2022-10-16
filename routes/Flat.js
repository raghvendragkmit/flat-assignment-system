const express = require("express");
const router = express.Router();
const isAdmin = require("../middleware/IsAdmin");
const isSignedIn = require("../middleware/IsSignedIn");
const {createFlat} = require("../controller/CreateFlat");
const {getAllFlats} = require("../controller/GetAllFlats");


router.get("/flat",isSignedIn,isAdmin,getAllFlats);
router.post("/flat",isSignedIn,isAdmin,createFlat);


module.exports = router;