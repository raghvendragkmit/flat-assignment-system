const express = require("express");
const router = express.Router();
const {isAdmin} = require("../middleware/IsAdmin");
const {isSignedIn} = require("../middleware/IsSignedIn");
const {createFlat} = require("../controller/CreateFlat");
const {getAllFlats} = require("../controller/GetAllFlats");
const {updateFlat} = require("../controller/UpdateFlat");
const {deleteFlat} = require("../controller/DeleteFlat");
const {getAllAssignedFlats}=require("../controller/GetAllAssignedFlats")


router.get("/flat",isSignedIn,isAdmin,getAllFlats);
router.post("/flat",isSignedIn,isAdmin,createFlat);
router.put("/flat",isSignedIn,isAdmin,updateFlat);
router.delete("/flat",isSignedIn,isAdmin,deleteFlat);
router.get("/flat/assignedFlats",isSignedIn,isAdmin,getAllAssignedFlats);
module.exports = router;