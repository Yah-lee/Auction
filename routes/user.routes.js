const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controllers");
const { RegisterValidator } = require("../middleware/validator");
const validate = require("../middleware/validate");

router.post("/create", RegisterValidator, validate, controllers.CreateUser);
router.post("/Login", controllers.Login);
router.put("/Update", controllers.UpdateUser);

module.exports = router;
