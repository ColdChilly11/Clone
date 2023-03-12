import React, { useEffect, useState } from 'react';
import Header from './Header';
import './payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import instance from './axios';
import { db } from './firebase';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { PaymentIntent } from '@stripe/stripe-js';



function Payment() {
  const [{basket, user}, dispatch] = useStateValue();

  // const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const stripe = useStripe();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {

    const getClientSecret = async () => {
        const response = await instance({
           method: 'post',
           url: `/payments/create` 
           
        });
        // axios.catch(error =>  {
        //   console.log('Oh noooo!!');
        //   console.log(error);
        // })
        setClientSecret(response.data.clientSecret);
        // axios.catch(error =>  {
        //   console.log('Oh noooo!!');
        //   console.log(error);
        // })
    }

    getClientSecret();
  }, [basket])

  console.log('The Secret is >>>', clientSecret)
  console.log('🔥', user)
  

  const handleSubmit = async event => {
        event.preventDefault();
        setProcessing(true);

        // try{
        const payload = await stripe.confirmCardPayment (clientSecret, {
          payment_method:
          {
          card: elements.getElement(CardElement)
          }
        }).then( ({paymentIntent}) => {
            //payment Intent = payment confirmation
            // console.log(stripe);
          
            // console.log(paymentIntent.id);            
            // db
            //   .collection('users')
            //   .doc(user?.uid)
            //   .collection('orders')
            //   .doc(paymentIntent.id)
            //   .set({
            //       basket: basket,
            //       amount: paymentIntent.amount,
            //       created: paymentIntent.created
            //   })

            // function getClientSecret() {
            // const databa = collection(db, 'todos')
            // getDocs(databa)
            //   .then(response => {
            //     const todos = response.docs.map(doc => ({
            //       data: doc.data(),
            //       id: doc.id,

            //     }))
            //   })
            //   .catch(error => console.log(error.message))
            // }
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
              type: 'EMPTY_BASKET'
            });

            // eslint-disable-next-line no-restricted-globals
            navigate('/orders')
          })
        // } catch (e) {
        //   setError(e.message);
        //   setProcessing(false);
        // }
  }

  const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
  }

  return (
    <>
    <div className='payment'>
        <div className='payment__container'>
              <h1>
                Checkout Product (
                  <Link to='/checkout'>{basket?.length} items</Link>
                )
              </h1>
          <div className='payment__section'>
              <div className='payment__title'>
                <h3>Delivery Address:</h3>
              </div>
              <div className='payment__address'>
                  <p>{user?.email}</p>
                  <p>123 react lane</p>
                  <p>IIT Powai, Mumbai</p>
              </div>
          </div>
          {/* Payment Section - Review Items */}
          <div className='payment__section'>
              <div className='payment__title'>
                <h3>Review Item and Delivery:</h3>
              </div>
              <div className='payment__items'>
                {basket.map(item =>(
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
          {/* Payment Section - Payment method */}
          <div className='payment__section'>
              <div className='payment__title'>
                <h3>Payment Method:</h3>
              </div>
              <div className='payment__details'>
                  <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>

                    <div className='payment__priceContainer'>
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
                      
                        <button disabled={processing || disabled || succeeded}>
                            <spam>{processing ? <p>Processing</p> : "Buy Now"}</spam>
                        </button>

                    </div>

                    {error && <div>{error}</div>}

                  </form>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Payment