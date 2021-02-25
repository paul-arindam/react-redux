import React, { Component } from "react";
import FilterBar from "./components/FilterBar";
import Products from "./components/Products";

import data from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      color: "",
      sort: "lowest",
    };
  }

  sortProductsHandler = (event) => {
    let orderBy = event.target.value;
    let productsCopy = [...this.state.products];
    console.log(orderBy);
    this.setState({
      sort: orderBy,
      products: productsCopy.sort((item1, item2) => {
        if (orderBy === "lowest") {
          if (item1.price > item2.price) return 1;
          else if (item1.price < item2.price) return -1;
          else return 0;
        } else {
          if (item1.price < item2.price) return 1;
          else if (item1.price > item2.price) return -1;
          else return 0;
        }
      }),
    });
  };

  filterProductsHandler = (event) => {
    let selectedColor = event.target.value;
    console.log(selectedColor);

    if (selectedColor === "") {
      this.setState({ products: data.products, color: selectedColor });
    } else {
      this.setState({
        color: selectedColor,
        products: data.products.filter(
          (product) => product.colors.indexOf(selectedColor) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Project</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <FilterBar
                count={this.state.products.length}
                color={this.state.color}
                sort={this.state.sort}
                filterProducts={this.filterProductsHandler}
                sortProducts={this.sortProductsHandler}
              />
              {this.state.products.length === 0 &&
                "No Products available for the selected colour"}
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>&copy; {date} All rights reserved</footer>
      </div>
    );
  }
}

var date = new Date().getFullYear();

export default App;
