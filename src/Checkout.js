import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <>
    <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Wireless/AdvantagePrime/BAU/15thNov/D46321486_IN_WLME_Advantage_for_prime_PC_ingress-banner_1500x300.jpg' alt='' />
    <div className='checkout'>
        <div className='checkout__left'>    
            <div>
            <h2>Hello, {user ? user.email : 'Guest'}</h2>
            <h2 className='checkout__title'>Shopping Cart</h2>
            &nbsp;

            {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            ))}
    
            </div>    
        </div>
        <div className='checkout__right'>
            <div>
            <Subtotal />
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout