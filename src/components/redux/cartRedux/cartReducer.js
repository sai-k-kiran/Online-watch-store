import CartActionsTypes from './cartTypes'
import { handleAddToCart, handleRemove, handleRemoveItem } from './cartUtils'

const cartState = {
    items: [],
} 
export const cartReducer = (state= cartState, action) => {
    switch(action.type){
        case CartActionsTypes.ADD_TO_CART :
            return {
                ...state.items, 
               items: handleAddToCart({
                   cartItems: state.items,
                   cartItemToAdd: action.payload
               })
            }
            case CartActionsTypes.REMOVE_ITEM :
                return {
                    ...state,
                    items : handleRemove({
                        cartItems: state.items,
                        cartItemToRemove: action.payload
                    })
                }
                case CartActionsTypes.REMOVE_CART_ITEM :
                    return {
                        ...state,
                        items : handleRemoveItem({
                            cartItems: state.items,
                            ItemToRemove: action.payload
                        })
                    }
        default: 
            return state
    }
}

export const CategoryReducer = (state= cartState, {type, payload}) => {
    switch(type){
        case CartActionsTypes.ITEM_CATEGORY :
            return {...state, category: payload}
        default: 
            return state
    }
}

