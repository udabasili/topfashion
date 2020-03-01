import React from 'react';

const CartItem = ({ imageUrl, price, name, quantity}) => {
  return (
    <div className="dropdown__item">
      <img src={imageUrl} alt={name} />
      <div className="dropdown__item__details">
      <span class="name">{name}</span>
      <span class="price">${price}</span>
      <span class="quantity">Quantity: {quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
