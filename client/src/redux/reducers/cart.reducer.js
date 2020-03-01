import {
    CART_BUTTON, GET_USER_CART_ITEMS, 
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

      case CART_BUTTON:
        return {
          ...state,
          hideDropDown: !state.hideDropDown,
        };
      default:
        return state
    }
  }
  