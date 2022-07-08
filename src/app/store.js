import { configureStore, } from '@reduxjs/toolkit';

import productReducer from '../features/productsSlice';
import reviewReducer from '../features/reviewSlice';
import cartReducer from '../features/cartSlice.jsx';
import userReducer from "../features/userSlice";

import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  persistReducer
} from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'cart']
};

const reducers = combineReducers({
  productList: productReducer,
  review: reviewReducer,
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});


