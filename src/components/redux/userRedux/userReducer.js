import userTypes from "./userTypes";

const initialState = {
    currentUser: null,
    signInSuccess: false,
    signUpError: [],
    signUpSuccess: false
}
const userReducer = (state=initialState, action) => {
    switch(action.type){
        case userTypes.SET_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        case userTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                signInSuccess: action.payload
            }
        case userTypes.SIGN_UP_ERROR:
            return {
                ...state,
                signUpError: action.payload
            }
        case userTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpSuccess: action.payload
            }
        default: 
            return state
    }
}
export default userReducer