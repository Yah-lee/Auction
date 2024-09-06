const express = require("express");
const router = express.Router();
const controller = require("../controllers/payments.controllers");


router.post("/", controller.CreatePayment);
module.exports = router;
