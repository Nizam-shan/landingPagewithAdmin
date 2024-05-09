const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.post("/Verify", auth.verifyOtp);
router.post("/sendOtp", auth.sendOtp);

module.exports = router;
