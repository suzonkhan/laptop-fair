import React from 'react';
import './Product.css';

const Product = (props) => {
// console.log("Prod" , props.product);
const {id, name, thumb, price} = props.product;
const addToCart = id => console.log(id);
    return (
        <div className='product-box'>
            <div className="product-box-inner">
                <div className="product-image">
                    <img src={thumb} alt={name} />
                </div>
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <button onClick={ () => addToCart(id)}> Add to Cart </button>
            </div>
        </div>
    );
};

export default Product;