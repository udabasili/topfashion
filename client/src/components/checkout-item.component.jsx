import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../redux/actions/cart.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CheckOutItem = ({item, removeItem, addItem, clearItemFromCart}) => {
  const {id, name, imageUrl, price, quantity} = item;
  return (
    <div className="checkout-item">
      <div
        onClick={() => clearItemFromCart(id)}
        className="checkout-item__remove-button"
      >
        <FontAwesomeIcon size="2x" icon={faTimes}/>
      </div>
      <div className="checkout-item__image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__quantity">
        <div
          onClick={() => removeItem(item)}
          className="checkout-item__button"
        >
          <FontAwesomeIcon size="1x" icon={faMinus}/>
        </div>
        <span className="value">{quantity}</span>
        <div
          onClick={() => addItem(item)}
          className="checkout-item__button"
        >
          <FontAwesomeIcon size="1x" icon={faPlus}/>
        </div>
      </span>
      <span className="price">
        ${price}
      </span>

    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (id) => dispatch(clearItemFromCart(id)),
  removeItem: (cartItem) => dispatch(removeItemFromCart(cartItem)),
  addItem: (cartItem) => dispatch(addItemToCart(cartItem)),

});

export default connect(null, mapDispatchToProps)(CheckOutItem);
