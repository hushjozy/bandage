// redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

export default rootReducer;
