const mongoose = require("mongoose");
const shortid = require("shortid");

const ProductsSchema = mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  colors: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Products", ProductsSchema);
