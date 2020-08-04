import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './cart-item.component';
import StyledButton from './styled-button.component';
import { selectCartItems } from '../redux/selectors/cart.selector';
import { cartButton } from '../redux/actions/cart.actions';
import PropTypes from 'prop-types';

/*
 * Dropdown component that is toggled off and on
 * @param {string} cartItems - Array of cart items 
 * @param {function} toggleDropdown - action of showing or hiding the dropdown
 */

const CartDropDown = ({ cartItems, toggleDropdown }) => {

	return(
    <div className="dropdown">
      <div className="dropdown__items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      {(cartItems.length > 0) &&
        <Link to='/checkout' style={{textDecoration: 'none'}} onClick={() =>toggleDropdown()}>
        <StyledButton>CheckOut</StyledButton>
      </Link>

      }
      
    </div>
  )
}

const mapStateToProps = state =>({
  cartItems: selectCartItems(state)
})

const mapDispatchToProps = (dispatch) =>({
  toggleDropdown: () => dispatch(cartButton()),
})

CartDropDown.propTypes = {
	cartItems: PropTypes.array.isRequired,
	toggleDropdown: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
