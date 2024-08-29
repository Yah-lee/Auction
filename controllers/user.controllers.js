const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const User = require("../models/user.models");
const { error } = require("console");

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
    return res.status(400).json({ error: "  Password is required" });
  }
  try {
    const foundUser = await User.findOne({
      where: {
        [Op.or]: [{ Email: identifier }, { Phone: identifier }],
      },
    });
    if (!foundUser) {
      return res.status(404).json({ error: "Invalid Email Or Phone Number " });
    }
    if (!foundUser.Password) {
      return res
        .status(500)
        .json({ error: "User's is missing in the database" });
    }
    const isMatch = await bcrypt.compare(Password, foundUser.Password);
    if (!isMatch) {
      return res.status(404).json({ error: "Invalid Password" });
    }
    return res.status(200).json({
      message: "Login Successful",
      User: {
        user_id: foundUser.user_id,
        FirstName: foundUser.FirstName,
        LastName: foundUser.LastName,
        Birthday: foundUser.Birthday,
        Gender: foundUser.Gender,
        Email: foundUser.Email,
        Password: foundUser.Password,
        Phone: foundUser.Phone,
        Address: foundUser.Address,
        Role: foundUser.Role,
      },
    });
  } catch (err) {
    console.error("Error during login", err.message);
    return res.status(500).json({
      error: "Error during login",
      details: err.message,
    });
  }
};

exports.UpdateUser = async (req, res) => {
  const { user_id } = req.params;
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
  try {
    const user = await User.findOne({ where: { user_id: user_id } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const updateUser = {
      FirstName: FirstName || user.FirstName,
      LastName: LastName || user.LastName,
      Birthday: Birthday || user.Birthday,
      Gender: Gender || user.Gender,
      Email: Email || user.Email,
      Password: Password ? await bcrypt.hash(Password, 10) : user.Password,
      Phone: Phone || user.Phone,
      Address: Address || user.Address,
      Role: Role || user.Role,
    };
    await User.update(updateUser);
    return res.status(200).json(user);
  } catch (err) {
    console.error("Failed to update user", err.message);
    return res.status(500).json({ error: "Failed to update user" });
  }
};
