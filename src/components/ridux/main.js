import { ActionTypes } from "./actions"

export const addTodo = (data) => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS, 
        payload: products
    }
}