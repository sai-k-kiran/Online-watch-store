import React, { useState, useRef } from 'react';
import './auth.css'
import Input from './input'

import { auth, handleUserProfile } from '../firebase/firebaseUtils';

const Register = () => {
    const [data, setData] = useState({name: '', email: '', password: '', confirm: '', error: []})
    const handleformChange = (e) => {
        const input = e.target.name
        const value = e.target.value
        setData({...data, [input]: value})
    }
    async function handleformSubmit(e) {
        e.preventDefault()
        const {name, email, password, confirm} = data
        if(confirm !== password){
            const err = ['Passwords don\'t match']
            setData({error: err})
        }
 
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await handleUserProfile(user, {name})
        } catch{
            alert('Failed to create an account')
        }
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
                        <button className='register'>Register</button>
                    </form>
                    {data.error.map((err, index) => {
                        return(
                            <li key={index}>
                                <p>{err}</p>
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
     )
}
 
export default Register;