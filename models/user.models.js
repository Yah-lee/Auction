const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const generate8DigitId = () => {
  return Math.floor(10000000 + Math.random() * 90000000);
};
const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      defaultValue: generate8DigitId,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    Birthday: {
      type: DataTypes.DATE,
    },
    Gender: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      unique: true,
    },
    Address: {
      type: DataTypes.STRING,
    },
    Role: {
      type: DataTypes.ENUM("seller", "bidder", "admin"),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: "Users",
  }
);

module.exports = User;
