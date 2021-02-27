const mongoose = require("mongoose");
const shortid = require("shortid");

const OrdersSchema = mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
  },
  cartItems: [
    {
      _id: String,
      title: String,
      price: Number,
      count: Number,
    },
  ],
  date: {
    type: Date,
    default: Date,
  },
});

module.exports = mongoose.model("orders", OrdersSchema);
