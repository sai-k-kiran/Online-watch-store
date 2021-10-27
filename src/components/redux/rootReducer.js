import { combineReducers } from "redux";
import { cartItems, cartLengthReducer, CategoryReducer } from "./cartRedux/cartReducer";

export default combineReducers({
 
    cart_length: cartLengthReducer,
    cartItems: cartItems,
    category: CategoryReducer
})