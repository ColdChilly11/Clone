import { useNavigate } from 'react-router-dom'
import React from 'react'
import Header from './Header'
import './Orders.css'

function Orders() {
  const navigate = useNavigate();
  return (
    <>
     <div className='orders'>
      <div className='orders__container'>
        Order Successful
      </div>
      <button onClick={e => {navigate('/')}}>Return Home</button>
     </div>
    </>
    )
}

export default Orders