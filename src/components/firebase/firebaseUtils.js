import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDn4MCn6HKFzrGSvu_oQwlgiSZqTavSbsA", 
    authDomain: "store-bd178.firebaseapp.com",
    projectId: "store-bd178",
    storageBucket: "store-bd178.appspot.com",
    messagingSenderId: "776658030920",
    appId: "1:776658030920:web:cf460c2c8bd370704a237d"
  };
  
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase