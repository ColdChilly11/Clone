import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProceedtoCheck() {
  const navigate = useNavigate();
  return (
    <div className='proceedtocheck'>
        <button onClick={e => {navigate('/payment')}}>Proceed to Checkout</button>
    </div>
  )
}

export default ProceedtoCheck