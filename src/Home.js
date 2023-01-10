import React from 'react';
import Header from './Header';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/71AHUyOICAL._SX3000_.jpg' alt='' />
            <div className='home__row'>
                <Product
                 id="123"
                 title="The Lean Startup"
                 price={29.99}
                 image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81RCff1NpnL.jpg"
                 rating={5}
                />
                <Product
                id="124"                
                title="Blackmagic Design Pocket Digital Cinema Camera 6K with EF Lens Mount (Black)"
                price={3500}
                image="https://m.media-amazon.com/images/I/71xdV46v5VL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                />
                <Product
                id="125"
                title="Apple iPhone 13 Pro (1TB) - Silver"
                price={2000}
                image="https://m.media-amazon.com/images/I/617FFRO3vcL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                />
            </div>
            <div className='home__row'>
                <Product
                id="126"                 
                title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)"
                price={99}
                image="https://m.media-amazon.com/images/I/61dgl2srHDL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                />
                <Product
                id="127" 
                title="Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Orange Alpine Loop - Small"
                price={1200}
                image="https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                />
                <Product
                id="128" 
                title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancellation Bluetooth Headphones with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, AUX, Touch Control and Alexa Voice Control - Black"
                price={300}
                image="https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                />
            </div>
            <div className='home__row'>
                <Product
                id="129" 
                title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                price={2000}
                image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                />
                <Product
                id="130" 
                title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
                price={19}
                image="https://m.media-amazon.com/images/I/81KEKEDFUcL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                />
            </div>
        </div>    
    </div>
  )
}

export default Home