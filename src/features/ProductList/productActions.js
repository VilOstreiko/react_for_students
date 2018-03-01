import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './types';

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  payload: products,
});

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
