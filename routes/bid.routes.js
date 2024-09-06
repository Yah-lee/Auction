const express = require("express");
const router = express.Router();
const controllers = require("../controllers/bid.controllers");

const { bidValidator } = require("../middleware/validator");
const validate = require("../middleware/validate");

router.post("/bid", controllers.createBid);
// router.post("/bid", bidValidator, validate, controllers.createBid);
router.get("/bid", controllers.get_bids);

module.exports = router;
