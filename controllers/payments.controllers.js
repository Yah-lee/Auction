const payments = require("../models/payments.models");
const Invoice = require("../models/invoices.models");

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
