import { createSelector } from "reselect";

export const selectCartData = (state) => state.cart 

export const selectCartItems = createSelector(
    [selectCartData],
    cart=> cart.items
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((quantity, cartItem)=> quantity + cartItem.quantity, 0)
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((quantity, item) => quantity + item.quantity * item.price, 0)  
)