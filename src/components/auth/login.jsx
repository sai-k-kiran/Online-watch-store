import React, { useState, useEffect} from 'react';
import './auth.css'
import Input from './input'
import {FcGoogle} from 'react-icons/fc'
import {signInWithGoogle} from '../firebase/firebaseUtils';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../redux/userRedux/userActions';
import { useHistory } from 'react-router';

const Login = (props) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [data, setData] = useState({email: '', password: ''})
    const mapState = ({user}) => ({
        signInSuccess: user.signInSuccess
    })
    const {signInSuccess} = useSelector(mapState)

    useEffect(()=>{
        if(signInSuccess){
            history.push('/')
        }
    }, [signInSuccess])

    const handleformChange = (e) => {
        const input = e.target.name
        const value = e.target.value
        setData({...data, [input]: value})
    }
    async function handleformSubmit(e) {
        e.preventDefault()
        const {email, password} = data
        dispatch(signInUser({email, password}))
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
 
export default Login