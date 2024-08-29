const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define(
  "Product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'user_id', 
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    starting_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    min_bid_increment: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    min_sale_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    auction_start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    auction_end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    video: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: "Products",
  }
);

module.exports = Product;
