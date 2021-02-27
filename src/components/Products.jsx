import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        {!this.props.products ? (
          <div>Loading...</div>
        ) : (
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <a
                    href={"#" + product._id}
                    onClick={() => this.openModal(product)}
                  >
                    <img src={product.image} alt={product.title}></img>
                    <p className="productName">{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>&#8377;{product.price}</div>
                    <button
                      className="button primary"
                      onClick={() => this.props.addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {product && (
          <Modal
            isOpen={true}
            onRequestClose={this.closeModal}
            ariaHideApp={false}
          >
            <button className="close-modal" onClick={this.closeModal}>
              X
            </button>
            <div className="product-details">
              <div className="image-container">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="other-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>
                  Colours:{" "}
                  {product.colors.map((color) => (
                    <span className="color-tabs" key={color}>
                      {color}{" "}
                    </span>
                  ))}
                </p>
                <p>&#8377;{product.price}</p>
                <button
                  className="button primary"
                  onClick={() => {
                    this.props.addToCart(product);
                    this.closeModal();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
  }
)(Products);
