import React from 'react';
import './SelectedItem.css';
const SelectedItem = ({selectItemDetails}) => { 
    return (
        <div className='fav-item-wrapper'>
            <h2>Yahoo..</h2>
            <p>This laptop will be best for you. </p>
            <p><img src={selectItemDetails?.thumb} alt="" /></p>
            <h3>{selectItemDetails?.name}</h3>

        </div>
    );
};

export default SelectedItem;