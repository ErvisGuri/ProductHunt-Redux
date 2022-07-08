import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../features/productsSlice';
import reviewReducer from '../features/reviewSlice';
import cartReducer from '../features/cartSlice.jsx';
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    productList: productReducer,
    review: reviewReducer,
    cart: cartReducer,
    user: userReducer,
  },

});
