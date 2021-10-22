import { combineReducers } from "redux";
import cartReducer, { cartItems, cartLengthReducer } from "./cartRedux/cartReducer";

export default combineReducers({
    cart: cartReducer, 
    cart_length: cartLengthReducer,
    cartItems: cartItems
})