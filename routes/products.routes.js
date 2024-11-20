const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controllers");
const validate = require("../middleware/validate");
const { ProductValidator } = require("../middleware/validator");

router.post("/create",);

router.get("/findAllProduct", productController.findAllProduct);

module.exports = router;
