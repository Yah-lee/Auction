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


// Use routes
app.use("/users", userRoutes);

// app.use("/products", authMiddleware, productRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
