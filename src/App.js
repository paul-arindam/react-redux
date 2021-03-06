import React, { Component } from "react";
import Cart from "./components/Cart";
import FilterBar from "./components/FilterBar";
import Products from "./components/Products";
//import data from "./data.json";    //local data stored in JSON file
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  constructor() {
    super(); //needed when not using redux
    this.state = {
      //products: data.products,
      // color: "",             //without redux
      // sort: "lowest",
      // cartItems: JSON.parse(localStorage.getItem("persistentCartItem"))
      //   ? JSON.parse(localStorage.getItem("persistentCartItem"))
      //   : [],
    };
  }

  // sortProductsHandler = (event) => {
  //   let orderBy = event.target.value;
  //   let productsCopy = [...this.state.products];
  //   console.log(orderBy);
  //   this.setState({
  //     sort: orderBy,
  //     products: productsCopy.sort((item1, item2) => {
  //       if (orderBy === "lowest") {
  //         if (item1.price > item2.price) return 1;
  //         else if (item1.price < item2.price) return -1;
  //         else return 0;
  //       } else {
  //         if (item1.price < item2.price) return 1;
  //         else if (item1.price > item2.price) return -1;
  //         else return 0;
  //       }
  //     }),
  //   });
  // };

  // filterProductsHandler = (event) => {
  //   let selectedColor = event.target.value;
  //   console.log(selectedColor);

  //   if (selectedColor === "") {
  //     this.setState({ products: data.products, color: selectedColor });
  //   } else {
  //     this.setState({
  //       color: selectedColor,
  //       products: data.products.filter(
  //         (product) => product.colors.indexOf(selectedColor) >= 0
  //       ),
  //     });
  //   }
  // };

  // addToCartHandler = (product) => {
  //   let cartItemsCopy = [...this.state.cartItems];
  //   let alreadyInCart = false;
  //   cartItemsCopy.forEach((item) => {
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItemsCopy.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems: cartItemsCopy });
  //   localStorage.setItem("persistentCartItem", JSON.stringify(cartItemsCopy));
  // };

  // removeCartItemHandler = (item) => {
  //   let cartItemsCopy = [...this.state.cartItems];
  //   let filteredItems = cartItemsCopy.filter(
  //     (product) => product._id !== item._id
  //   );
  //   this.setState({
  //     cartItems: filteredItems,
  //   });
  //   localStorage.setItem("persistentCartItem", JSON.stringify(filteredItems));
  // };

  // placeOrderHandler = (order) => {
  //   console.log(order.items);
  // };

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">Project</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <FilterBar
                // count={this.state.products.length}
                // color={this.state.color}
                // sort={this.state.sort}
                // filterProducts={this.filterProductsHandler}
                // sortProducts={this.sortProductsHandler}
                />
                <Products
                // products={this.state.products}    //without redux
                // addToCart={this.addToCartHandler}
                />
              </div>
              <div className="sidebar">
                <Cart
                // cartItems={this.state.cartItems}
                // removeCartItem={this.removeCartItemHandler}    //without redux
                // placeOrder={this.placeOrderHandler}
                />
              </div>
            </div>
          </main>
          <footer>&copy; {date} All rights reserved</footer>
        </div>
      </Provider>
    );
  }
}

var date = new Date().getFullYear();

export default App;
