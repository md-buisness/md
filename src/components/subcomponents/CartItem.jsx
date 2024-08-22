import React from "react";

const CartItem = ({ id, name, cost, confirmed, photo, deleteItem }) => {
  return (
    <div className="cart-item" key={id}>
      <div className="item-image">
        <img src={photo} alt="item image" />
      </div>
      <div className="item-name">{name}</div>
      <div className="item-cost">{cost}</div>
      <div className="cart-quantity">
        <input type="number" min="1" max="10" />
      </div>
      <div className="remove-container">
        <button
          title="Confirm Item"
          type="submit"
          className="item-confirm"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <i class="fa-solid fa-check"></i>
        </button>
        <button
          title="Remove Item"
          className="item-remove"
          onClick={() => {
            deleteItem(id);
          }}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
