import React from 'react';
import { ReactComponent as Bag } from '../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import { cartTotal } from '../redux/selectors/cart.selector';
import { cartButton } from '../redux/actions/cart.actions';
import PropTypes from "prop-types";

/*
 * Cart icon
 * @param {string} itemCount - number of item in cart
 * @param {function} toggleDropdown - action of showing or hiding the dropdown
 */

const CartIcon = ({ toggleDropdown, itemCount }) => {
  return (
  <div className="cart-icon" onClick={()=>toggleDropdown()}>
    <Bag className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
  )
};

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
  toggleDropdown: PropTypes.func.isRequired
}

const mapStateToProps = (state) =>({
  itemCount: cartTotal(state),
})

const mapDispatchToProps = (dispatch) =>({
  toggleDropdown: () => dispatch(cartButton()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
