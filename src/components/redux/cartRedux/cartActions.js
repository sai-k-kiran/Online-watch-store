import CartActionsTypes from './cartTypes';

export const cartLength = (length) => ({
  type: CartActionsTypes.CART_LENGTH,
  payload: length
})
export  const cartItems = (items) => ({
  type: CartActionsTypes.CART_ITEMS,
  payload: items
})
export  const ItemCategories = (category) => ({
  type: CartActionsTypes.ITEM_CATEGORY,
  payload: category
})