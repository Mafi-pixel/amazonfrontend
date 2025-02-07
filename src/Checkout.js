// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import React from 'react'
import './Checkout.css'
import { useStateValue} from "./StateProvider"
import CheckoutProducts from './CheckoutProducts';
import Subtotal from './Subtotal';
function Checkout()  {
   const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
        <div className="checkout__left">
          <img
             className="checkout__ad"
          
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map ((item) =>(
          <CheckoutProducts
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating} 
          />
          ))}
           
        </div>
        <div className="checkout__right">
          <Subtotal />

        </div>
    </div>
    )
}

export default Checkout;
