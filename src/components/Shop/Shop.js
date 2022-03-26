import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import SelectedItem from '../SelectedItem/SelectedItem';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [favItem, setFavItem] = useState(null);
    useEffect( () =>{
        fetch('fake-db.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    const addToCart = selectedProduct =>{
        if(cart.length < 4){
            const newCart = [...cart, selectedProduct];
            setCart(newCart)
        } else{
            alert ("Don't cross limit");
        }
       
        
    };
   const getRandomProduct =  (max) => {
       const myProduct = Math.floor(Math.random() * max);
        return myProduct;
   }
   const showfavItem = () =>{
    const randomItem = getRandomProduct(cart.length);
    setFavItem(randomItem)
   }
   const clearCart = () => {
     setCart([])
   }
 
    return (
        <div className="page-wrapper">
            
            <div className='products'>
            {
                products.map(product => <Product 
                    product={product}
                    addCart = {addToCart} 
                    key={product.id}
                    ></Product>)
            } 
            </div>
            <div className='cart-wrapper'> 
            {cart.length > 0 && favItem !== null && <SelectedItem selectItemDetails={cart[favItem]}></SelectedItem> }
            {
                cart.map(cartItem => <Cart  
                key={cartItem.id} 
                cartItem={cartItem}
                ></Cart> )
            }
            {cart.length > 0 && <button className='show-fav-item-btn' onClick={showfavItem}>Choose One For Me</button>}
            {cart.length > 0 && <button className='remove-fav-item-btn' onClick={clearCart}>Choose Again</button>}
            
            </div>
            
            
        </div>
    );
};

export default Shop;