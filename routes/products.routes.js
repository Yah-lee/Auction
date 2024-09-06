const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controllers");
const validate = require("../middleware/validate");
// const upload = require('../middleware/upload');
const { ProductValidator } = require("../middleware/validator");

// router.post(
//   '/products',
//   upload.fields([
//     { name: 'image', maxCount: 1 },
//     { name: 'video', maxCount: 1 },
//   ]),
//   productController.Products
// );
// router.post("/products", ProductValidator, validate, productController.create);
router.post("/", productController.create);

router.get("/findAllProduct", productController.findAllProduct);

module.exports = router;
