const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Invoice = require("../models/invoices.models");

const Payment = sequelize.define(
  "Payment",
  {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Invoice,
        key: "invoice_id",
      },
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.ENUM("credit_card", "bank_transfer", "PromptPay", "cash"),
      allowNull: false,
    },
    payment_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    payment_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "Payments",
  }
);

module.exports = Payment;
