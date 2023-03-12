import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className='signin'>
        <button onClick={e => {navigate('/login')}}>Sign In</button>
    </div>
  )
}

export default SignIn