import { auth, handleUserProfile } from "../../firebase/firebaseUtils";
import userTypes from "./userTypes";

export const setCurrentUser = user => ({
    type: userTypes.SET_USER,
    payload: user
})
export const signInUser = ({email, password}) => async dispatch => {
    try{
        await auth.signInWithEmailAndPassword(email, password)
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        })
    } catch(err){
        console.log(err)
    }
}
export const signUpUser = ({name, email, password, confirm }) => async dispatch => {
    if(confirm !== password){
        const err = ['Passwords don\'t match']
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: err
        })
    }
    try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        const additionalData = {name}
        await handleUserProfile(user, additionalData);
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        })
    } catch{
        alert('Failed to create an account')
    }
}