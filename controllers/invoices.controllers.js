const Invoice = require("../models/invoices.models");
const Product = require("../models/products.models");
const User = require("../models/user.models");

exports.createInvoice = async (req, res) => {
  const { product_id, winner_id, seller_id, final_price, payment_status } =
    req.body;
  try {
    const newInvoice = await Invoice.create({
      product_id,
      winner_id,
      seller_id,
      final_price,
      payment_status,
    });
    return res.status(201).json({ newInvoice });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// exports.getAllInvoices = async (req, res) => {
//   try {
//     const invoices = await Invoice.findAll({
//       include: [
//         { model: Product, attributes: ["product_id", "name"] },
//         {
//           model: User,
//           as: "Winner",
//           attributes: ["user_id", "FirstName", "LastName"],
//         },
//         {
//           model: User,
//           as: "Seller",
//           attributes: ["user_id", "FirstName", "LastName"],
//         },
//       ],
//     });

//     return res.status(200).json(invoices);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// exports.getInvoiceById = async (req, res) => {
//   const { invoice_id } = req.params;

//   try {
//     const invoice = await Invoice.findByPk(invoice_id, {
//       include: [
//         { model: Product, attributes: ["product_id", "name"] },
//         {
//           model: User,
//           as: "Winner",
//           attributes: ["user_id", "FirstName", "LastName"],
//         },
//         {
//           model: User,
//           as: "Seller",
//           attributes: ["user_id", "FirstName", "LastName"],
//         },
//       ],
//     });

//     if (!invoice) {
//       return res.status(404).json({ message: "Invoice not found" });
//     }

//     return res.status(200).json(invoice);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// exports.updateInvoice = async (req, res) => {
//   const { invoice_id } = req.params;
//   const { payment_status } = req.body;

//   try {
//     const updated = await Invoice.update(
//       { payment_status, updated_at: new Date() },
//       { where: { invoice_id } }
//     );

//     if (!updated[0]) {
//       return res
//         .status(404)
//         .json({ message: "Invoice not found or not updated" });
//     }

//     return res.status(200).json({ message: "Invoice updated successfully" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// exports.deleteInvoiceById = async (req, res) => {
//   const { invoice_id } = req.params;

//   try {
//     const result = await Invoice.destroy({ where: { invoice_id } });

//     if (!result) {
//       return res
//         .status(404)
//         .json({ message: "Invoice not found or already deleted" });
//     }

//     return res.status(200).json({ message: "Invoice deleted successfully" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };
