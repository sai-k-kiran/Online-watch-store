import { combineReducers } from "redux";
import { productReducer } from "./todoreducer";
import { TodoReducer } from "./todoreducer";

const reducers = combineReducers({
    allProducts: productReducer,
    todos: TodoReducer
})

export default reducers