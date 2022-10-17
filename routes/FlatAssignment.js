const express = require("express");
const router = express.Router();
const {isAdmin} = require("../middleware/IsAdmin");
const {isSignedIn} = require("../middleware/IsSignedIn");
const {isFlatExist} = require("../middleware/isFlatExist");
const {createFlatAssignment} = require("../controller/CreateFlatAssigment");
const {isUserExist} = require("../middleware/IsUserExist");
const { changeAssignmentStatus } = require("../middleware/ChangeAssignmentStatus");
const { getFlatAssignment } = require("../controller/GetFlatAssignment");
const { deleteFlatAssignment } = require("../controller/DeleteFlatAssignment");
const { updateFlatAssignment } = require("../controller/UpdateFlatAssignment");
const {changeAssignmentStatusToEmpty}=require("../middleware/ChangeAssignmentStatusToEmpty")
router.post("/flatassignment",isSignedIn,isAdmin,isFlatExist,isUserExist,changeAssignmentStatus,createFlatAssignment);
router.get("/flatassignment",isSignedIn,isAdmin,getFlatAssignment);
router.put("/flatassignment",isSignedIn,isAdmin,isUserExist,isFlatExist,changeAssignmentStatus,changeAssignmentStatusToEmpty,updateFlatAssignment);
router.delete("/flatassignment",isSignedIn,isAdmin,changeAssignmentStatusToEmpty,deleteFlatAssignment);
module.exports = router;