import { createStore } from "redux";
import reducers from './index'

const stores = createStore(reducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default stores