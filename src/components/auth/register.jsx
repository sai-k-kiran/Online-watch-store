import React, { useState, useRef } from 'react';
import './auth.css'
import Input from './input'
import {useAuth} from './authContext'
import {useHistory} from 'react-router-dom'

const Register = () => {
    const [data, setData] = useState({name: '', email: '', password: '', confirm: ''})
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)   
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
    const {signup} = useAuth()
    const history = useHistory() 

    const handleformChange = (e) => {
        const input = e.target.name
        const value = e.target.value
        setData({...data, [input]: value})
    }
    async function handleformSubmit(e) {
        e.preventDefault()
		setSubmitted(true);
 
        try{
            setError('')
            setLoading(true)
            await signup( emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch{
            alert('Failed to create an account')
        }
        setLoading(false)
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
                        value={data.name} placeholder='Name' reference={nameRef}/>
                        <Input name='email' type='email' handlechange={handleformChange}
                        value={data.email} placeholder='Email' reference={emailRef}/>
                        <Input name='password' type='password' handlechange={handleformChange}
                        value={data.password} placeholder='Password' reference={passwordRef}/>
                        <Input name='confirm' type='password' handlechange={handleformChange}
                        value={data.confirm} placeholder='Confirm Password' reference={confirmRef}/>
                        <button className='register'>Register</button>
                    </form>
                </div>
            </div>
        </div>
     )
}
 
export default Register;