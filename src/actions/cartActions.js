// cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});
