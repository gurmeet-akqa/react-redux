// ProductItem.js
import React from 'react';

const ProductItem = ({ image, name, price, onClick, ctaCopy = 'Add to Cart' }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
      <img src={image} alt={name} style={{ maxWidth: '200px', maxHeight: '300px', marginBottom: '10px' }} />
      <h3>{name}</h3>
      <p>${price}</p>
      {onClick && <button onClick={onClick}>{ctaCopy}</button>}
    </div>
  );
};

export default ProductItem;
