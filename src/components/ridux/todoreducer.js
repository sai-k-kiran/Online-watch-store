import { ActionTypes } from "./actions"

const todoState = {
    list: []
}
const productState = {
    products: []
}

export const TodoReducer = (state= todoState, action) => {
    switch(action.type){
        case ActionTypes.ADD_TODO:
            const {id, data} = action.payload   
            return{
                ...state,
                data : [
                    ...state.list,
                    {
                    id : id,
                    data: data
                    }
                ]
            }
        default: return state
    }
}

export const productReducer = (state=productState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state
    }
}