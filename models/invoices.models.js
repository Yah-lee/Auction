const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Product = require("./products.models");
const User = require("./user.models");

const Invoice = sequelize.define(
  "Invoice",
  {
    invoice_id: {
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
    winner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
      allowNull: false,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
      allowNull: false,
    },
    final_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    payment_status: {
      type: DataTypes.ENUM("pending", "paid", "failed"),
      defaultValue: "pending",
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
    tableName: "Invoices",
  }
);

module.exports = Invoice;
