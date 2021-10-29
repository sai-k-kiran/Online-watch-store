import { combineReducers } from "redux";
import userReducer from "./userRedux/userReducer";
import { cartReducer, CategoryReducer } from "./cartRedux/cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    category: CategoryReducer
})
const configStorage = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export default persistReducer(configStorage, rootReducer)