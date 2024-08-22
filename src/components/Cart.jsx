import { React, useEffect, useState } from "react";
import CartItem from "./subcomponents/CartItem.jsx";
import Checkout from "./Checkout.jsx";

const Cart = ({ cartItems, deleteFromCart, total }) => {
  const [showCart, setShowCart] = useState("grid");
  const [checkout, setCheckOut] = useState("none");

  useEffect(() => {}, [cartItems]);
  return (
    <>
      <li className="nav-cart">
        <button
          className="cart-btn"
          onClick={() => setShowCart(showCart == "grid" ? "none" : "grid")}
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </li>
      <div
        className="cart-container"
        style={{
          display: showCart,
        }}
      >
        <button
          className="close-cart"
          onClick={() => setShowCart(showCart == "grid" ? "none" : "grid")}
        >
          <i className="fa-solid fa-xmark" title="Close"></i>
        </button>

        <div className="items">
          {cartItems.map((item) => {
            return (
              <Checkout
                id={item.id}
                name={item.name}
                cost={item.cost}
                photo={item.photo}
                confirmed={item.confirmed}
                deleteItem={deleteFromCart}
                showCheckout={checkout}
              />
            );
          })}
        </div>
        <div className="cart-total">
          <h2 className="total-cost">{total}</h2>
        </div>
        <div className="cart-order">
          <button
            onClick={() => {
              setShowCart("none");
              cartItems.length == 0
                ? alert("Cart is Empty")
                : setCheckOut("grid");
            }}
            className="order-now"
          >
            order now
          </button>
        </div>
      </div>
      <Checkout showCheckout={checkout} />
    </>
  );
};

export default Cart;
