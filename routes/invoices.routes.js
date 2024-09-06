const express = require("express");
const router = express.Router();
const controller = require("../controllers/invoices.controllers");
const { invoicesValidator } = require("../middleware/validator");
const validate = require("../middleware/validate");

router.post("/",  controller.createInvoice);

router.post("/", invoicesValidator, validate, controller.createInvoice);

// router.get("/invoices", controller.getAllInvoices);

// router.get("/invoices/:invoice_id", invoicesController.getInvoiceById);

// router.put("/invoices/:invoice_id", invoicesController.updateInvoice);

// router.delete("/invoices/:invoice_id", invoicesController.deleteInvoiceById);

module.exports = router;
