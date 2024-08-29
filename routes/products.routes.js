const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controllers');
const upload = require('../middleware/upload'); 


router.post(
  '/products',
  upload.fields([
    { name: 'image', maxCount: 1 }, 
    { name: 'video', maxCount: 1 }, 
  ]),
  productController.Products
);

module.exports = router;
