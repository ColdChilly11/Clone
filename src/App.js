import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
    <div className='app'>
      <Header />
      <Routes>
        <Route exact path='/checkout' element={<Checkout />} />
        <Route path="/"  element={<Home />}/>                     Default root should be at bottom
      </Routes>
    </div>
    </Router>
  );
}

export default App;
