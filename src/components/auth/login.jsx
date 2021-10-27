import React, { useState, useRef } from 'react';
import './auth.css'
import Input from './input'
import {FcGoogle} from 'react-icons/fc'
import {useAuth} from './authContext'
import {useHistory} from 'react-router-dom'
import {signInWithGoogle, auth} from '../firebase/firebaseUtils';

const Login = () => {
    const [data, setData] = useState({email: '', password: ''})

    const handleformChange = (e) => {
        const input = e.target.name
        const value = e.target.value
        setData({...data, [input]: value})
    }
    async function handleformSubmit(e) {
        e.preventDefault()
        const {email, password} = data
        try{
            await auth.signInWithEmailAndPassword(email, password)
            setData({email: '', password: ''})
        } catch{
            alert('Failed to sign in')
        }

    }

    return ( 
        <div className='modalBackground'>
            <div className='loginContainer'>
                <div className='modal-title'>
                    <h1>Login</h1>
                </div>
                <div className='modal-body'>
                    <form className='modal-form' onSubmit={handleformSubmit}>
                        <Input name='email' type='email' handlechange={handleformChange}
                        value={data.email} placeholder='Email'/>
                        <Input name='password' type='password' handlechange={handleformChange}
                        value={data.password} placeholder='Password'/>
                        <button className='submit'>Log In</button>
                        <button className='googleAuth' onClick={signInWithGoogle}>
                            Or Sign In with Google <FcGoogle className='g-icon'/></button>
                    </form>
                </div>
            </div>
        </div>
     )
}
 
export default Login;