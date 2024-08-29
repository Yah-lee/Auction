const express = require("express");
const app = express();
const cors = require("cors");
const port = 8888;

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user.routes");

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
