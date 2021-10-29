import React, { useState, useEffect} from 'react';
import './auth.css'
import Input from './input'
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser} from '../redux/userRedux/userActions';

const Register = (props) => {
    const [data, setData] = useState({name: '', email: '', password: '', confirm: ''})
    const [error, setError] = useState([])
    const mapState = ({user}) => ({
        signUpSuccess: user.signUpSuccess,
        signUpError: user.signUpError
    })
    const {signUpSuccess, signUpError} = useSelector(mapState)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(signUpSuccess){
            props.history.push('/')
        }
    }, [signUpSuccess]) 

    useEffect(()=>{
        if(Array.isArray(signUpError) && signUpError.length > 0){
            setError(signUpError)
        }
    }, [signUpError])

    const handleformChange = (e) => {
        const input = e.target.name
        const value = e.target.value
        setData({...data, [input]: value})
    }
    function handleformSubmit(e) {
        e.preventDefault()
        const {name, email, password, confirm} = data
        dispatch(signUpUser({name, email, password, confirm}))
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
                    {error.map((err, index) => {
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