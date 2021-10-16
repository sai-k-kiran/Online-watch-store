import { combineReducers } from "redux";
import cartReducer from "./cartRedux/cartReducer";

export default combineReducers({
    cart: cartReducer
})