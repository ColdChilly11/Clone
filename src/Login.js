import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth
        .signInWithEmailAndPassword(email, password) 
        .then((auth) => {
                navigate('/')
            }
        )
        .catch((error) => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password) 
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    navigate('/')
                }
            })
            .catch((error) => alert(error.message));

    }
    
    return (
    <div className='login'>
        <Link to = '/'>
            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt='' />
        </Link>
        <div className='login__container'>
            <h2 className='login__container__title'>Sign In</h2>
            <form>
                <h5>Email</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                
                <button type='submit' onClick={signIn}>Sign In</button>
            </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button onClick={register}>Create your Amazon account</button>
            
        </div>
    </div>
  )
}
export default Login
