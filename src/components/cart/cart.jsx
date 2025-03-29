import React from 'react';
// import Bottle from '../bottle/bottle';
import './cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div className='cart-container'>
           {
            cart.map(Bottle=><div key={Bottle.id}
               
            >
             <img src={Bottle.img}></img>
              <button onClick={()=> handleRemoveFromCart(Bottle.id)}>X</button>
            </div>)
           } 
        </div>
    );
};

export default Cart;