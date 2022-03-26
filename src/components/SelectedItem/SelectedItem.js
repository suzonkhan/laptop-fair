import React from 'react';
import './SelectedItem.css';
const SelectedItem = ({selectItemDetails}) => {
    // console.log({selectItemDetails});
    return (
        <div className='fav-item-wrapper'>
            <h1>Yahoo..</h1>
            <p><img src={selectItemDetails?.thumb} alt="" /></p>
            <h2>{selectItemDetails?.name}</h2>

        </div>
    );
};

export default SelectedItem;