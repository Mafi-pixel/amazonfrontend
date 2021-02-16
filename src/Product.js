import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product ({id,title,image,rating,price}) {
    const [{basket}, dispach] =useStateValue ();
    const addToBasket = () => {
        dispach({
            type:'ADD_TO_BASKET',
            item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            },
        });
    };
    return (
        <div className="product">
         <div className="product__info">
             <p>{title}</p>
             <p className="product__price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>
             <div  className="product__rating">
                 {Array(rating)
                 .fill()
                 .map(() =>(
                 <p>🌟</p>
                 ))}
                 
             </div>
        </div>
          <img 
        //  src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325,B01,204,203,200_.jpg"
        src={image}
          alt=""/> 
          

        <button onClick={addToBasket}> Add to Basket </button>
        </div>
    );
};

export default Product
