import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";

const Cart = ({cartItem}) => {
    // console.log(itemCart);

   
    return (
      
        <div className='cart-item-row'>
            <div><img src={cartItem.thumb} alt="" /></div>
            <div>{cartItem.name}</div>
            <div> 
                <button className='removeCart'>
                <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
       
    );
};

export default Cart;