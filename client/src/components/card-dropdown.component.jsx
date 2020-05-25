import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './cart-item.component';
import StyledButton from './styled-button.component';
import { selectCartItems } from '../redux/selectors/cart.selector';
import { cartButton } from '../redux/actions/cart.actions';

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
  cartItems: selectCartItems(state),
  hideDropDown: state.hideDropDown
})

const mapDispatchToProps = (dispatch) =>({
  toggleDropdown: () => dispatch(cartButton()),
})


export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
