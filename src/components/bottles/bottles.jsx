import React, { use, useState } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css'
const Bottles = ({bottlesPromise}) => {

    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise)
      
       const handleAddToCart =(bottle)=>{
        // console.log('bottle added to be cart', bottle)
            const newCart =[...cart, bottle]
            setCart(newCart)

       }
   
    // console.log(bottles)
    return (
        <div>
            <h3>bottles:{bottles.length}</h3>
                 <p>added to cart: {cart.length}</p>

          <div className='bottles-container'>
          {
                bottles.map(bottle=> <Bottle
                key={bottle.id}
                handleAddToCart ={handleAddToCart}
                bottle ={bottle}
                ></Bottle>)
            }
          </div>
        </div>
    );
};

export default Bottles;