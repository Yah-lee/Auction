const payments = require("../models/payments.models");
const Invoice = require("../models/invoices.models");
const { error } = require("console");
const { where } = require("sequelize");

exports.CreatePayment = async (req, res) => {
  const {
    invoice_id,
    payment_method,
    payment_amount,
    payment_time,
    transaction_id,
  } = req.body;
  try {
    const newPayment = await payments.create({
      invoice_id,
      payment_method,
      payment_amount,
      payment_time,
      transaction_id,
    });
    return res.status(201).json({ newPayment });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.findAllPayments = async (req, res) => {
  try {
    const data = await payments.findAllPayments();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.findOnePayment = async (req, res) => {
  const { payment_id } = req.params;
  try {
    const payment = await payments.findOnePayment({
      where: { payment_id: payment_id },
    });
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }
    return res.status(200).json({ payment });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
