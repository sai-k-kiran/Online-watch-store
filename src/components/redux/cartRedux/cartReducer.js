import CartActionsTypes from './cartTypes'

const INITIAL_STATE = {
    hidden: true
}
const cartState = {
    length: '',
    items: {}
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionsTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden 
            }
        default:
            return state
    }
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
            return {...state.items, items: payload} // added ".items" after state
        case CartActionsTypes.DELETE_ITEMS :
            return {...state.items.filter(item => item !== payload)} 
        default: 
            return state
    }
}


export default cartReducer