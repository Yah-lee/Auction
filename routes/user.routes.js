const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controllers");

router.post("/create", controllers.CreateUser);
router.post("/Login", controllers.Login);

module.exports = router;
