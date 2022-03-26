import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('fake-db.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    const addToCart = selectedProduct =>{
        const newCart = [...cart, selectedProduct];
        setCart(newCart)
        console.log(typeof newCart);
    };

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
            {
                cart.map(cartItem => <Cart  
                key={cartItem.id} 
                cartItem={cartItem}
                ></Cart> )
            }
                 
            </div>
        </div>
    );
};

export default Shop;