const express = require("express");
const app = express();
const cors = require("cors");
const port = 8888;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/products.routes");
const bidRoutes = require("./routes/bid.routes");
const systemRoutes = require("./routes/system.routes");
const invoicesRoutes = require("./routes/invoices.routes");
const paymentsRoutes = require("./routes/payments.routes");
const ChatsRoutes = require("./routes/chats.routes");
const authMiddleware = require("./middleware/auth");

// Public routes (no authentication required)
app.use("/users", userRoutes);
app.use("/", bidRoutes); // Assuming public bidding
app.use("/system", systemRoutes);

// Protected routes (authentication required)
app.use("/products", authMiddleware, productRoutes);
app.use("/invoices", authMiddleware, invoicesRoutes);
app.use("/payments", authMiddleware, paymentsRoutes);
app.use("/chats", authMiddleware, ChatsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
