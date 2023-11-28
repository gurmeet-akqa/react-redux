// ProductList.js
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

import ProductItem from './ProductItem';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul style={{listStyle: 'none', display: 'flex', flexWrap:'wrap'}}>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
             <ProductItem image={product.src} name={product.name} price={product.price} onClick={() => addToCart(product)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
