const express = require("express");
const router = express.Router();
const controllers = require("../controllers/system.controllers");
const { systemValidator } = require("../middleware/validator");
const validate = require("../middleware/validate");

router.post("/createLog", systemValidator, validate, controllers.createLog);
router.get("/getAllLogs", controllers.getAllLogs);
router.get("/getLogById/:log_id", controllers.getLogById);
router.delete("/deleteLogById/:log_id", controllers.deleteLogById);

module.exports = router