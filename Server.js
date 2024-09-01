const express = require("express");
const app = express();
const cors = require("cors");
// const session = require("express-session");
// const passport = require("passport");
const port = 8888;

app.use(cors());
app.use(express.json());


// app.use(session({
//   secret: 'your_secret_key',
//   resave: false,
//   saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());


const userRoutes = require("./routes/user.routes");
const ProductRoutes = require("./routes/products.routes");
const bidRoutes = require("./routes/bid.routes");

app.use("/", userRoutes);
app.use("/", ProductRoutes);
app.use("/bid", bidRoutes);

// app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
