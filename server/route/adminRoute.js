const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminContoller");

router.post("/admin_register", adminController.adminRegistration);
router.post("/admin_login", adminController.adminLogin);
router.get("/get_all_job_seekers", adminController.getJobSeeker);
router.get("/get_all_higher_studies", adminController.getHigherStudiesData);
router.get("/get_all_sectionC", adminController.getSectionc);
router.get("/download-resume/:filename", adminController.download);
router.put(
  "/job_seeker_status_change/:id",
  adminController.updateContactedStatusJobSeeker
);

module.exports = router;
