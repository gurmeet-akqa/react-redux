// App.js
import React from 'react';
import { Provider } from 'react-redux';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <ProductList />
        <ShoppingCart />
      </div>
    </Provider>
  );
}

export default App;
