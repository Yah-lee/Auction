const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controllers");
const validate = require("../middleware/validate");
const { ProductValidator } = require("../middleware/validator");
const authMiddleware = require("../middleware/auth");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  ProductValidator,
  validate,
  productController.create
);

router.get("/findAllProduct", productController.findAllProduct);

module.exports = router;
