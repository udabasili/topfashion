import React from 'react';
import {connect} from 'react-redux';
import { addItemToCart } from '../redux/actions/cart.actions';
import { withRouter } from 'react-router-dom';
import { addError } from '../redux/actions/error.actions';
function ShopCard({ item, addItem, history, addError }) {
  const {id, name, price, imageUrl } = item;
  const addItemToCart = (item) =>{
    addItem(item).then((result) => {        
    }).catch((err) => {
      if(err.status === 401){
        history.push("/auth")
        addError("Please Login")
      }
    });
  }
  return (
    <div id={id} className="card">
      <div
        className="card__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="card__footer">
        <div className="card__footer__text">
          <span className="name">{name}</span>
          <span className="price">
            $ {price}
          </span>
        </div>
        <div onClick={()=>addItemToCart(item)} className="card__footer__button">
            Buy
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (cartItem) => dispatch(addItemToCart(cartItem)),
  addError: (error) => dispatch(addError(error))
});
export default withRouter(connect(null, mapDispatchToProps)(ShopCard));
