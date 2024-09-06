const express = require("express");
const router = express.Router();
const controller = require("../controllers/chats.controllers");

router.post("/", controller.createChat);
module.exports = router