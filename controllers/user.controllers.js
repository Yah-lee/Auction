const bcrypt = require("bcrypt");
const { Op, json } = require("sequelize");
const User = require("../models/user.models");
const { error } = require("console");
const jwt = require("jsonwebtoken");

exports.CreateUser = async (req, res) => {
  const {
    FirstName,
    LastName,
    Birthday,
    Gender,
    Email,
    Password,
    Phone,
    Address,
    Role,
  } = req.body;

  const ExistsEmail = await User.findOne({ where: { Email: Email } });
  if (ExistsEmail) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const ExistsPhone = await User.findOne({ where: { Phone: Phone } });
  if (ExistsPhone) {
    return res.status(400).json({ error: "Phone already exists" });
  }

  const hashedPassword = await bcrypt.hash(Password, 10);

  try {
    const newUser = await User.create({
      FirstName,
      LastName,
      Birthday,
      Gender,
      Email,
      Password: hashedPassword,
      Phone,
      Address,
      Role,
    });
    return res.status(200).json({ user: newUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.Login = async (req, res) => {
  const { identifier, Password } = req.body;

  if (!Password) {
    return res.status(400).json({ error: "Password is required" });
  }

  try {
    const foundUser = await User.findOne({
      where: {
        [Op.or]: [{ Email: identifier }, { Phone: identifier }],
      },
    });

    if (!foundUser) {
      return res.status(404).json({ error: "Invalid Email or Phone Number" });
    }

    if (!foundUser.Password) {
      return res
        .status(500)
        .json({ error: "User's password is missing in the database" });
    }

    const isMatch = await bcrypt.compare(Password, foundUser.Password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid Password" });
    }

    const token = jwt.sign(
      { user_id: foundUser.user_id, Role: foundUser.Role },
      "SecretKey"
    );

    return res.status(200).json({
      message: "Login Successful",
      token,
      User: {
        user_id: foundUser.user_id,
        FirstName: foundUser.FirstName,
        LastName: foundUser.LastName,
        Birthday: foundUser.Birthday,
        Gender: foundUser.Gender,
        Email: foundUser.Email,
        Phone: foundUser.Phone,
        Address: foundUser.Address,
        Role: foundUser.Role,
      },
    });
  } catch (err) {
    console.error("Error during login:", err.message);
    return res.status(500).json({
      error: "Error during login",
      details: err.message,
    });
  }
};
