const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("auction", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  timezone: "+07:00",
});

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Table created successfully!");
//   })
//   .catch((err) => {
//     console.log("Unable to create table:", err);
//   });

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((err) => {
    console.error("Unable to connect to database:", err);
  });

module.exports = sequelize;
