import React, { useState } from 'react';
import './auth.css'
import Input from './input'
import { useHistory } from 'react-router';

const Register = () => {
    const [data, setData] = useState({name: '', email: '', password: '', confirm: ''})
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
            <div className='modalContainer'>
                <div className='modal-title'>
                    <h1>Register</h1>
                    <p>Get started</p>
                </div>
                <div className='modal-body'>
                    <form className='modal-form' onSubmit={handleformSubmit}>
                        <Input name='name' type='text' handlechange={handleformChange}
                        value={data.name} placeholder='Name'/>
                        <Input name='email' type='email' handlechange={handleformChange}
                        value={data.email} placeholder='Email'/>
                        <Input name='password' type='password' handlechange={handleformChange}
                        value={data.password} placeholder='Password' />
                        <Input name='confirm' type='password' handlechange={handleformChange}
                        value={data.confirm} placeholder='Confirm Password'/>
                        <button className='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
     )
}
 
export default Register;