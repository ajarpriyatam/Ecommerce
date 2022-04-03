const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter product Name"],
    },
    category: {
      type: String,
      required: [true, "Please Enter product Description"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter product Price"],
    },
    stock: {
      type: Number,
      default: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

const Product = new mongoose.model("Product", productSchema);
module.exports = Product