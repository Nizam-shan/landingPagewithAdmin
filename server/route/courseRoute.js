const express = require("express");
const router = express.Router();
const purposeRoute = require("../controllers/purposeController");
const upload = require("../middleware/upload");

router.post(
  "/purpose_job",
  upload.single("resume"),
  purposeRoute.createJobSeeker
);

router.post("/higher_studies", purposeRoute.higherStudies);
router.post("/section_c", purposeRoute.sectionC);

module.exports = router;
