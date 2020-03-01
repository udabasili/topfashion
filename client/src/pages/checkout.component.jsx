import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckOutItem from '../components/checkout-item.component';
import StripeCheckoutButton from '../components/stripe-button.component';
// import CheckOutItem from '../../../../../components/topshop/checkout-item/checkout-item.component';
// import StripeCheckoutButton from "../../../../../components/topshop/stripe-button/stripe-button.component"


class CheckOut extends Component {

  render() {
    const { items, total } = this.props;
    return (
      <div className="checkout">
        <div className="checkout__header">
            <span>CheckOut</span>
        </div>
        {items.length > 0 && 
          items.map((cartItem) => (
            <CheckOutItem key={cartItem.id} item={cartItem} />
          ))}
        <div className="checkout__total">
          <span>
            TOTAL: ${total}
          </span>
        </div>
        <StripeCheckoutButton price={total}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.cart,
  total: state.cart.cart.reduce(
    (previous, current) => (
      previous + (current.quantity * current.price)
    ), 0,
  ),
});

export default connect(mapStateToProps, null)(CheckOut);
