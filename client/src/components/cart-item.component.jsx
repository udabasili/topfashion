import React from 'react';
import PropTypes from "prop-types";

/*
 * Each Cart item in dropdown component
   @param {string} imageUrl
   @param {number} price
   @param {string} name
   @param {number} quantity
 */


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

CartItem.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired
}

export default CartItem;
