const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Product = require("../models/products.models");
const User = require("../models/user.models");

const Bid = sequelize.define(
  "Bid",
  {
    bid_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "product_id",
      },
      allowNull: false,
    },
    bidder_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
      allowNull: false,
    },
    bid_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bid_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    is_proxy_bid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    tableName: "Bids",
  }
);

module.exports = Bid;
