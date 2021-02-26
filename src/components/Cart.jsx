import React, { Component } from "react";

export class Cart extends Component {
  render() {
    const { cartItems } = this.props;
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
                      onClick={() => this.props.removeCartItem(item)}
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
                Total: &#8377;{" "}
                {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
              </span>
              <div className="right">
                <button className="button primary">CheckOut</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
