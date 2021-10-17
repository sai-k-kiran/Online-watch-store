import React, { useState, useRef } from 'react';
import './auth.css'
import Input from './input'
import {FcGoogle} from 'react-icons/fc'
import {useAuth} from './authContext'
import {Link, useHistory} from 'react-router-dom'
import { signInWithGoogle } from '../firebase/firebaseUtils';

const Login = () => {
    const [data, setData] = useState({email: '', password: ''})
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const history = useHistory() 

    const handleformChange = (e) => {
        const input = e.target.name
        const value = e.target.value
        setData({...data, [input]: value})
        // const { value, name } = event.target;
        // setData({ [name]: value }); Can be done like this too
    }
    async function handleformSubmit(e) {
        e.preventDefault()
		setSubmitted(true);
        try{
            setError('')
            await login( emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch{
            alert('Failed to sign in')
        }
        setData({email: '', password: ''})
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
                        value={data.email} placeholder='Email' reference={emailRef}/>
                        <Input name='password' type='password' handlechange={handleformChange}
                        value={data.password} placeholder='Password' reference={passwordRef}/>
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