// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import dsBookReducer from './reducers';

const store = configureStore({
  reducer: {
    books: dsBookReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});



export default store;
