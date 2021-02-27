import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";
import Modal from "react-modal";
import Moment from "react-moment";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      showCheckOut: false,
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  placeOrder = (event) => {
    event.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
    console.log(order);
  };
  closeModal = () => {
    this.props.clearOrder();
  };

  render() {
    console.log(this.props.order);
    const { cartItems, order } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cartHeader">
            <span>No Items in your Cart</span>
          </div>
        ) : (
          <div className="cart cartHeader">
            <span>{cartItems.length} Items in Cart</span>
          </div>
        )}
        {order && (
          <Modal
            isOpen={true}
            onRequestClose={this.closeModal}
            ariaHideApp={false}
          >
            <button className="close-modal" onClick={this.closeModal}>
              X
            </button>
            <div className="order-details">
              <h3 className="successMessage">
                Your Order was Placed Successfully
              </h3>
              <h2>Invoice Number: {order._id}</h2>
              <ul>
                <li>
                  <div>Name:</div>
                  <div>{order.name}</div>
                </li>
                <li>
                  <div>Email:</div>
                  <div>{order.email}</div>
                </li>

                <li>
                  <div>Phone:</div>
                  <div>{order.phone}</div>
                </li>
                <li>
                  <div>Address:</div>
                  <div>{order.address}</div>
                </li>
                <li>
                  <div>Cart Items: </div>
                  <div>
                    {order.cartItems.map((item) => (
                      <div key={item._id}>
                        <i>{item.count}</i>
                        {" x "}
                        {item.title}
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <div>Total: </div>
                  <div>&#8377;{order.total}</div>
                </li>
                <li>
                  <div>Order Placed on: </div>
                  <div>
                    <Moment>{order.date}</Moment>
                  </div>
                </li>
              </ul>
            </div>
          </Modal>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    {item.title}
                    <div>
                      &#8377; {item.price} x {item.count}
                    </div>
                  </div>
                  <div className="right">
                    <button
                      className="button"
                      onClick={() => this.props.removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div className="total">
              <span>
                <b>
                  Total: &#8377;{" "}
                  {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
                </b>
              </span>
              {!this.state.showCheckOut && (
                <div className="right">
                  <button
                    className="button primary"
                    onClick={() => {
                      this.setState({ showCheckOut: true });
                    }}
                  >
                    CheckOut
                  </button>
                </div>
              )}
            </div>
          )}
          {this.state.showCheckOut && (
            <div className="checkout-form">
              <h3>Enter Your Details</h3>
              <form onSubmit={this.placeOrder}>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  required
                  onChange={this.handleInput}
                />
                <br />

                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  required
                  onChange={this.handleInput}
                />
                <br />

                <label htmlFor="phone">Phone</label>
                <br />
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  required
                  onChange={this.handleInput}
                />
                <br />

                <label htmlFor="address">Address</label>
                <br />
                <input
                  type="text"
                  name="address"
                  required
                  onChange={this.handleInput}
                />
                <br />

                <div className="button-container">
                  <button type="submit" className="button primary">
                    Place Order
                  </button>
                  <button
                    className="button secondary"
                    onClick={() => {
                      this.setState({ showCheckOut: false });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  {
    removeFromCart,
    createOrder,
    clearOrder,
  }
)(Cart);
