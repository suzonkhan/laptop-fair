import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () =>{
        fetch('fake-db.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    
    return (
        <div className="page-wrapper">
            <div className='products'>
            {
                products.map(product => <Product 
                    product={product}
                    key={product.id}
                    ></Product>)
            } 
            </div>
            <div className='cart-wrapper'>

            </div>
        </div>
    );
};

export default Shop;