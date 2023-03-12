import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './payment';
import Orders from './Orders'
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51MZJBqSJ1WGgLoZ2zgD3J9AAhIAXJrNSVtAhVmIKgl25tqbB3qzKeeuJoWXGOsbuyeBIXeIySJDSpeIS7WoA1d0U00JQAJmsbg');

function App() {
  const [{}, dispatch] = useStateValue();
    useEffect(() => {

      auth.onAuthStateChanged((authUser) => { 
        console.log('The user is >>>', authUser);

        if(authUser) {
            
          
          dispatch({
              type: "SET_USER",
              user: authUser,
            });
        } else {
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, [])

    return (
      <Router>
        <Header />
        <div className="app">
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
             <Route path="/" element={<Home />} /> 
             {/* Default root should be at bottom */}
          </Routes>
        </div>
      </Router>
    );
}

export default App;
