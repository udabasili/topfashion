import {
    CART_BUTTON, GET_USER_CART_ITEMS, CLEAR_ALL_ITEMS_FROM_CART
  } from '../actionTypes';

  
const INITIAL_STATE = {
    hideDropDown: true,
    cart: [],
  };

  export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_USER_CART_ITEMS:
        return{
          ...state,
          cart: action.payload
        };
      case CLEAR_ALL_ITEMS_FROM_CART:
        return {
          ...state,
          cart: []
        };
      case CART_BUTTON:
        return {
          ...state,
          hideDropDown: !state.hideDropDown,
        };
      default:
        return state
    }
  }
  