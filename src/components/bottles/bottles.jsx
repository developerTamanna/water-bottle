import React, { use, useEffect, useState } from 'react';
import Cart from '../cart/cart';
import Bottle from '../bottle/bottle';
import './bottles.css'
import { addToStoredCart, getStoreCart, removeForCart } from '../../utilities/localStorage';
const Bottles = ({bottlesPromise}) => {

    const [cart, setCart] = useState([])


      

    const bottles = use(bottlesPromise)

     useEffect (()=>{
      const  storedCartIds= getStoreCart();
    //   console.log(storedCartIds, bottles)
    const storeCart =[];
           for(let id of storedCartIds){
            console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id ===id);
            if(cartBottle){
               storeCart.push(cartBottle)
            }
           }
           setCart(storeCart)
     }, [bottles])

// add to cart
       const handleAddToCart =(bottle)=>{
        // console.log('bottle added to be cart', bottle)
            const newCart =[...cart, bottle]
            setCart(newCart)
         // save the bottled id in the storage
         addToStoredCart(bottle.id)
       }
   
    // console.log(bottles)

// **remove to cart

const handleRemoveFromCart = id =>{
    console.log('remove item from the cart' ,id)
    const remainingCart = cart.filter(bottle=>bottle.id !==id)
    setCart(remainingCart);
    removeForCart(id);
}






    return (
        <div>
            <h3>bottles:{bottles.length}</h3>
                 <p>added to cart: {cart.length}</p>

                 <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}> </Cart>

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