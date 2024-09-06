const express = require("express");
const app = express();
const cors = require("cors");
const port = 8888;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require("./routes/user.routes");
// const productRoutes = require("./routes/products.routes");
// const bidRoutes = require("./routes/bid.routes");
// const systemRoutes = require("./routes/system.routes");
const invoicesRoutes = require("./routes/invoices.routes");

// Use routes with specific base paths
app.use("/users", userRoutes);
// app.use("/products", productRoutes);
// app.use("/bids", bidRoutes);
// app.use("/system", systemRoutes);
app.use("/invoices", invoicesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
