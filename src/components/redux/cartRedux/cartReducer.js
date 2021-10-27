import CartActionsTypes from './cartTypes'

const cartState = {
    length: '',
    items: {},
    category: ''
}
export const cartLengthReducer = (state= cartState, {type, payload}) => {
    switch(type){
        case CartActionsTypes.CART_LENGTH :
            return {...state, length: payload}
        default: 
            return state
    }
}
export const cartItems = (state= cartState, {type, payload}) => {
    switch(type){
        case CartActionsTypes.CART_ITEMS :
            return {...state, items: payload}
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

