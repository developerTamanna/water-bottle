// ***  1. to getSomething from local storage you will get it as a string

//**2
//*  convert this to javaScript object
//  */

const getCartFormLocalStorage =()=>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return[];
}


const saveCartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


const addItemToCartLocalStorage = id=>{
    const cart = getCartFormLocalStorage()
    // cart.push(id)
    const newCart = [...cart, id]
    //**save new cart to the local storage */
    saveCartToLocalStorage(newCart)
}


const removeFromLocalStorage = id =>{
const storedCart = getCartFormLocalStorage()
const remainingCart = storedCart.filter(storedId => storedId !==id);
saveCartToLocalStorage(remainingCart)
}

export {getCartFormLocalStorage as getStoreCart, addItemToCartLocalStorage as addToStoredCart, removeFromLocalStorage as removeForCart}