import {
    CART_BUTTON, GET_USER_CART_ITEMS, CLEAR_ALL_ITEMS_FROM_CART
  } from '../actionTypes';
import { restApi } from '../../services/api';
import { addError, removeError } from './error.actions';

  
export const getUserCartItems = (cartItems) => ({
  type: GET_USER_CART_ITEMS,
  payload: cartItems
});

export const clearAllCartItems = () => ({
  type: CLEAR_ALL_ITEMS_FROM_CART,
});

export const cartButton = () => ({
  type: CART_BUTTON,
});


export const getUserCart = ()=>{
  let userId = localStorage.getItem("userId");
  return dispatch => {
    return new Promise((resolve, reject) =>{
      return restApi("get", `/user/${userId}/cart`)
        .then((response) => {
          dispatch(removeError())
          dispatch(getUserCartItems(response))
          return resolve()
          }
        )
        .catch((error)=>{
          reject()
        })
    })
  }
}
  
export const addItemToCart = (addedCartItem) => {
  const userId = localStorage.getItem("userId");
  return dispatch => {
    return new Promise((resolve, reject) =>{
      return restApi("post", `/user/${userId}/cart/add`,addedCartItem)
      .then((response) => {        
        dispatch(removeError())
        dispatch(getUserCartItems(response))
        return resolve()
        }
      )
      .catch((error)=>{

        reject(error)
      })
  })
}
}

export const removeItemFromCart = (cartItemToRemove) => {
  const userId = localStorage.getItem("userId");
  return dispatch => {
    return new Promise((resolve, reject) =>{
      return restApi("delete", `/user/${userId}/cart/${cartItemToRemove.id}/delete`)
      .then((response) => {
        dispatch(removeError())
        dispatch(getUserCartItems(response))
        return resolve()
        }
      )
      .catch((error)=>{
        reject(error)
        dispatch(addError("Please Login"))

        })
    })
  }
}

export const clearItemFromCart = (itemId) => {
  const userId = localStorage.getItem("userId");
  return dispatch => {
    return new Promise((resolve, reject) =>{
      return restApi("delete", `/user/${userId}/cart/${itemId}/clear`)
      .then((response) => {
        dispatch(removeError())
        dispatch(getUserCartItems(response))
        return resolve()
        }
      )
      .catch((error)=>{
        reject(error)
        dispatch(addError("Please Login"))
        })
    })
  }
}
  