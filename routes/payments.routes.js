const express = require("express");
const router = express.Router();
const controller = require("../controllers/payments.controllers");


router.post("/", controller.CreatePayment);
router.get("/findAll", controller.findAllPayments);
router.get("/:payment_id", controller.findOnePayment);
module.exports = router;
