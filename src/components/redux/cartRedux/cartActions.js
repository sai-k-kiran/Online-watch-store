import CartActionsTypes from './cartTypes';

export const toggleCartHidden = () => ({
  type: CartActionsTypes.TOGGLE_CART_HIDDEN
});

export const cartLength = (length) => ({
  type: CartActionsTypes.CART_LENGTH,
  payload: length
})
export  const cartItems = (items) => ({
  type: CartActionsTypes.CART_ITEMS,
  payload: items
})