import React, { useState } from 'react';
import './auth.css'
import Input from './input'
import { useHistory } from 'react-router';

const Login = () => {
    const [data, setData] = useState({email: '', password: ''})
    const [submitted, setSubmitted] = useState(false)

    const handleformChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    async function handleformSubmit(e) {
        e.preventDefault()
		// setSubmitted(true);
 
        // try{
        //     await signup( emailRef.current.value, passwordRef.current.value)
        //     history.push('/menu')
        // } catch{
        //     alert('Failed to create an account')
        // }
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
                        value={data.password} placeholder='Password' />
                        <button className='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
     )
}
 
export default Login;