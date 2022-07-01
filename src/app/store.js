import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../features/productsSlice';
import reviewReducer from '../features/reviewSlice'

export const store = configureStore({
  reducer: {
    productList: productReducer,
    review: reviewReducer,
  },
});
