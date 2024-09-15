const express = require("express");
const router = express.Router();
const { listOfState } = require("../controllers/utility");
const { adminLogin } = require("../controllers/admin");
const { registerLineMen, lineMenProfile } = require("../controllers/linemen");

router.get("/lineMenProfile:id", lineMenProfile);
router.get("/state-list", listOfState);
router.post("/adminLogin", adminLogin);
router.post("/register-lineMen", registerLineMen);

module.exports = router;
