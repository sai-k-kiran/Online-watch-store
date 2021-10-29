import CartActionsTypes from './cartTypes';
export const addProduct = (cartItem) => ({
  type: CartActionsTypes.ADD_TO_CART,
  payload: cartItem
})
export const removeItem = (item) => ({
  type: CartActionsTypes.REMOVE_ITEM,
  payload: item
})
export const removeCartItem = (item) => ({
  type: CartActionsTypes.REMOVE_CART_ITEM,
  payload: item
})

export  const ItemCategories = (category) => ({
  type: CartActionsTypes.ITEM_CATEGORY,
  payload: category
})