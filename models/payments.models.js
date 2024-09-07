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

Payment.belongsTo(Invoice, { foreignKey: "invoice_id" });

Payment.findAllPayments = async () => {
  return await Payment.findAll({
    include: [
      {
        model: Invoice,
        as: "Invoice",
        attributes: ["invoice_id", "final_price", "payment_status"],
      },
    ],
  });
};

Payment.findOnePayment = async (payment_id) => {
  return await Payment.findOne({
    where: { payment_id },
    include: [
      {
        module: Invoice,
        as: "Invoice",
        attributes: ["invoice_is", "final_price", "payment_status"],
      },
    ],
  });
};

module.exports = Payment;
