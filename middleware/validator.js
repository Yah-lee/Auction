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
      if (value && !value.endWith("@gmail.com")) {
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
module.exports = { RegisterValidator };
