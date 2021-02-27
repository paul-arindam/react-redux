const express = require("express");
const mongoose = require("mongoose");
const Products = require("./backend/models/Products");
const Orders = require("./backend/models/Orders");
const app = express();
const port = process.env.PORT || 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to MongoDB ATLAS
const dbURI =
  "mongodb+srv://arindam:dummypass654@cluster0.li5tu.mongodb.net/react-redux-project?retryWrites=true&w=majority";
mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to MongoDB");
  }
);

//_______PRODUCTS APIs_______
//GET All Products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.send(products);
  } catch (err) {
    res.send(err);
  }
});

//Create Product
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Products(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
  } catch (err) {
    res.json({ ErrorMessage: err });
  }
});

//DELETE Product
app.delete("/api/products/:id", async (req, res) => {
  const deleteProduct = await Products.findByIdAndDelete(req.params.id);
  res.json(deleteProduct);
});

//_______ORDERS APIs_______
//Place an order
app.post("/api/orders", async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    return res.send({ message: "Data is required" });
  }
  const order = await Orders(req.body).save();
  res.send(order);
});

//Create SERVER
app.listen(port, () => console.log(`server running at PORT:${port}`));
