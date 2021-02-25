import React, { Component } from "react";

export class FilterBar extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">
          {this.props.count} Products Available
        </div>
        <div className="filter-sort">
          Order By{"  "}
          <select
            defaultValue={this.props.sort}
            onChange={this.props.sortProducts}
          >
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </div>
        <div className="filter-color">
          Colour{"  "}
          <select
            defaultValue={this.props.color}
            onChange={this.props.filterProducts}
          >
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="white">White</option>
            <option value="gray">Gray</option>
            <option value="green">Green</option>
            <option value="metalBlue">Metallic-Blue</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FilterBar;