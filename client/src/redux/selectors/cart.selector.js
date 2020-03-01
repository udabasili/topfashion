import {createSelector} from "reselect";

export const selectCart = state => state.cart 

export const selectCartItems = createSelector(
    [selectCart],
    cartItem => cartItem.cart 
)

export const cartTotal = createSelector(
    [selectCartItems],
    items => items ? items.reduce((previous, current) =>{
        return current.quantity + previous
    }, 0) : 0
)