const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controllers");
const { RegisterValidator } = require("../middleware/validator");
const validate = require("../middleware/validate");
const rbacMiddleware = require("../middleware/rbacMiddleware");

router.post("/create", RegisterValidator, validate, controllers.CreateUser);

router.post("/Login", controllers.Login);


module.exports = router;
