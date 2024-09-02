const { body } = require("express-validator");

const isValidPassword = (value) => {
  const PasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!PasswordRegex.test(value)) {
    throw new Error(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number."
    );
  }
  return true;
};

const RegisterValidator = [
  body("FirstName").notEmpty().withMessage("First name is required"),
  body("LastName").notEmpty().withMessage("Last name is required"),
  body("Birthday").notEmpty().withMessage("Birthday is required"),
  body("Gender").notEmpty().withMessage("Gender is required"),
  body("Email")
    .optional()
    .isEmail()
    .withMessage("Invalid email format")
    .custom((value) => {
      if (value && !value.endsWith("@gmail.com")) {
        throw new Error("Email must be gmail.com");
      }
      return true;
    }),
  body("Password")
    .notEmpty()
    .withMessage("Password is required")
    .custom(isValidPassword),
  body("Phone").notEmpty().withMessage("Phone is required"),
  body("Address").notEmpty().withMessage("Address is required"),
  body("Role").notEmpty().withMessage("Role is required"),
];

const ProductValidator = [
  body("seller_id").notEmpty().withMessage("seller_id is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("starting_price").notEmpty().withMessage("Starting price is required"),
  body("min_bid_increment")
    .notEmpty()
    .withMessage("Min bid increment is required"),
  body("min_sale_price").notEmpty().withMessage("Min sale price is required"),
  body("auction_start_time")
    .notEmpty()
    .withMessage("Auction start time is required"),
  body("auction_end_time")
    .notEmpty()
    .withMessage("Auction end time is required"),
  body("image").notEmpty().withMessage("Image is required"),
  body("video").notEmpty().withMessage("Video is required"),
];

const bidValidator = [
  body("product_id").notEmpty().withMessage("product_id is required"),
  body("bidder_id").notEmpty().withMessage("bidder_id is required"),
  body("bid_amount").notEmpty().withMessage("bid_amount is required"),
  body("bid_time").notEmpty().withMessage("bid_time is required"),
  body("is_proxy_bid").notEmpty().withMessage("is_proxy_bid is required"),
];

const systemValidator = [
  body("user_id").notEmpty().withMessage("user_id is required"),
  body("action").notEmpty().withMessage("acton is required"),
  body("timestamp").notEmpty().withMessage("timestamp is required"),
];
const invoicesValidator = [
  body("product_id").notEmpty().withMessage("product_id is required"),
  body("winner_id").notEmpty().withMessage("Winner_is is required"),
  body("seller_id").notEmpty().withMessage("seller_id is required"),
  body("final_price").notEmpty().withMessage("final_price is required"),
  body("payment_status").notEmpty().withMessage("payment_status is required"),
];
module.exports = {
  RegisterValidator,
  ProductValidator,
  bidValidator,
  systemValidator,
  invoicesValidator,
};
