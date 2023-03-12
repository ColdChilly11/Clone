import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
import './payment'
import SignIn from './SignIn';
import ProceedtoCheck from './ProceedtoCheck';

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <h2>Subtotal</h2>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items):
                <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type='checkbox' /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'} />
        
            {/* <button className='subtotal__proceed' onClick={e => {navigate('/payment')}} > Proceed to checkout </button> */}
            {user ? <ProceedtoCheck /> : <SignIn />}

      </div>
  )
}

export default Subtotal