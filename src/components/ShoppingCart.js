// ShoppingCart.js
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

import ProductItem from './ProductItem';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
  const showCart = cartItems.length > 0;
  if ( !showCart ) {
    return null;
  }
  return (
    <div>
      <h2>Shopping Cart - Total cost = {cartTotal}</h2>
      <ul style={{listStyle: 'none', display: 'flex', flexWrap:'wrap'}}>
        {cartItems.map((item, index) => (
          <li key={index}>
            <ProductItem
              image={item.src}
              name={item.name}
              price={item.price}
              onClick={() => removeFromCart(item)}
              ctaCopy='Remove from cart'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
