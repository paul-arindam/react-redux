import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productsActions";

class FilterBar extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          {this.props.filteredProducts.length} Products Available
        </div>
        <div className="filter-sort">
          Order By{"  "}
          <select
            defaultValue={this.props.sort}
            //onChange={this.props.sortProducts}  //without redux
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </div>
        <div className="filter-color">
          Colour{"  "}
          <select
            defaultValue={this.props.color}
            //onChange={this.props.filterProducts} //without redux
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="white">White</option>
            <option value="gray">Gray</option>
            <option value="green">Green</option>
          </select>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  { filterProducts, sortProducts }
)(FilterBar);
