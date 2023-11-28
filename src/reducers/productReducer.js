// productReducer.js
import productsData from './products.json';

const initialState = {
  products: productsData,
};

const productReducer = (state = initialState, action) => {
  // No actions for now
  return state;
};

export default productReducer;
