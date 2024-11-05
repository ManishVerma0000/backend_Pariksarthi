const express = require("express");
const router = express.Router();
const { listOfState } = require("../controllers/utility");
const { userlogin } = require("../controllers/admin");
const { registerLineMen, lineMenProfile } = require("../controllers/linemen");
const {
  registerStation,
  findStationNameFromDistrict,
} = require("../controllers/station");
const { createLine, lineDetailsStationWise } = require("../controllers/line");
const{login}=require('../controllers/user')

router.post('/login',login)
router.get("/lineDetailsStationWise", lineDetailsStationWise);
router.get("/findStationNameFromDistrict", findStationNameFromDistrict);
router.get("/lineMenProfile:id", lineMenProfile);
router.get("/state-list", listOfState);
router.post("/adminLogin", userlogin);
router.post("/register-lineMen", registerLineMen);
router.post("/registerStation", registerStation);
router.post("/createLine", createLine);


module.exports = router;
