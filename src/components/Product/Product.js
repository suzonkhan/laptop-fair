import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({product, addCart}) => {
const {name, thumb, price} = product;

    return (
        <div className='product-box'>
            <div className="product-box-inner">
                <div className="product-image">
                    <img src={thumb} alt={name} />
                </div>
                <h3>{name}</h3>
                <p>Price: {price}</p>
                
                <button onClick={ () => addCart(product)} className="add-to-Cart">
                    
                     Add to Cart  <FontAwesomeIcon icon={faShoppingCart} />
                     
                 </button>
            </div>
        </div>
    );
};

export default Product;