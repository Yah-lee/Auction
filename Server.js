const express = require("express");
const app = express();
const cors = require("cors");
const port = 8888;

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user.routes");
// const ProductRoutes = require("./routes/products.routes");

// app.use("/", ProductRoutes);
app.use("/", userRoutes);

// app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
