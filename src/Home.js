import React from 'react'
import './Home.css'
import Product from './Product';
// import './Product.css'

function Home ()  {
    return (
        <div className="home">
          <div className="home__container">
        <img 
        className="home__image" 
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="" 
          /> 
          
           <div className="home__row">
               <Product 
               id="12321341"
               title="The Lean Startup:How Constant Innovation Creates Radically Successsful Business Paperback"
               price={11.96}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325,B01,204,203,200_.jpg"
            /> 
               <Product
               id="52456588"
               title="Valentine's Day BROMEN Women Handbag Designer Vegan Leather Hobo Handbags Shoulder Bucket Cross-body Purse"
               price={39.99}
               rating={5}
               image="https://m.media-amazon.com/images/I/51j+9YluGHL._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
               <Product
               id="46359125"
               title="Dragon Touch Notepad K10 Tablet, 10 inch Android Tablet,
                    2GB RAM 32GB Storage, Quad-Core Processor, 10.1 IPS HD Display, Micro HDMI, Android 9.0 Pie, 5G WiFi, Metal Body Black"
               price={119.99}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/71pV%2B2tCO-L._AC_SX466_.jpg" 
            /> 
                <Product
               id="52643817"
               title="FIMEI Stand Mixer 660W, 5.5 Qt Food Mixer, 6-Speed Tilt-Head Kitchen Mixer (Dough Hook and Beater with Ceramic Glaze,"
               price={114.99}
               rating={5}
               image="https://m.media-amazon.com/images/I/71yHuGQnGbL._AC_UY218_.jpg" />
            </div> 
              

              <Product
              id="32564892"
               title=" HP Elite 8300 PC with 2 x 24 HP Monitors, Wireless Keyboard and Mouse, WiFi, Gel Mousepad, Intel i5, 8GB Me..."
               price={89.99}
              rating={5}
               image="https://m.media-amazon.com/images/I/71BHRt3sEwL._AC_UY218_.jpg"
              />
            
             <div className="home__row">
               <Product 
               id="65423867"
               title="Pyle PDA6BU.5 Compact Bluetooth Stereo Amplifier - 
               Desktop Audio Power Amp Receiver with FM Radio, MP3/USB/SD Readers,
                Digital LCD Display, Microphone Input (200 Watt), BlackT"
               price={58.99}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/816op52cEpL._AC_SX425_.jpg"
               /> 
               </div>  
               
            
        </div>
        </div>
    );
}

export default Home
