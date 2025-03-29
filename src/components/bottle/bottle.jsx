import React from 'react';
import  './bottle.css';

const Bottle = ({bottle}) => {
    console.log(bottle)
    const {img, name, price, stock
    }= bottle
    return (
        <div className='card bottle'>
            <img src={img} alt="bottle"></img>
            <h3>{name}</h3>
            <small>${price}</small>
            <p>stock: {stock}</p>
            <button>by now</button>
        </div>
    );
};

export default Bottle;