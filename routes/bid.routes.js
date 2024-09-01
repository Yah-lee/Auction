const express = require("express");
const router = express.Router();
const controllers = require("../controllers/bid.controllers");

router.post("/bid", controllers.createBid);

module.exports = router;
