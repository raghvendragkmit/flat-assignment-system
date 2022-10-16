const express = require("express");
const router = express.Router();
const {isAdmin} = require("../middleware/IsAdmin");
const {isSignedIn} = require("../middleware/IsSignedIn");
const {isFlatExist} = require("../middleware/isFlatExist");
const {createFlatAssignment} = require("../controller/CreateFlatAssigment");
const {isUserExist} = require("../middleware/IsUserExist");
const { changeAssignmentStatus } = require("../middleware/changeAssignmentStatus");

router.post("/flatassignment",isSignedIn,isAdmin,isFlatExist,isUserExist,changeAssignmentStatus,createFlatAssignment);

module.exports = router;