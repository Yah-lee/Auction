const express = require("express");
const router = express.Router();
const invoicesController = require("../controllers/invoices.controllers");

router.post("/invoices", invoicesController.createInvoice);

router.get("/invoices", invoicesController.getAllInvoices);

router.get("/invoices/:invoice_id", invoicesController.getInvoiceById);

router.put("/invoices/:invoice_id", invoicesController.updateInvoice);

router.delete("/invoices/:invoice_id", invoicesController.deleteInvoiceById);

module.exports = router;
