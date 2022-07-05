import React, { useEffect } from "react";

import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
  selectCart,
} from "../../features/cartSlice";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Button from "antd/lib/button";

const Cart = () => {
  const cart1 = useSelector((state) => state.cart);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <ArrowLeftOutlined />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="product-price">Price</h3>
            <h3 className="product-Quantity">Quantity</h3>
            <h3 className="product-total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.img} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <h3>{cartItem.desc}</h3>
                    <Button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="cart-product-price">{cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    +
                  </button>
                </div>
                <div className="cart-product-total-price">
                  {`${(cartItem.price * cartItem.cartQuantity).toFixed(2)}$`}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">{`${cart1.cartTotalAmount.toFixed(
                  2
                )}$`}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="start-shopping">
                <Link to="/">
                  <ArrowLeftOutlined />
                  <span>Start Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
