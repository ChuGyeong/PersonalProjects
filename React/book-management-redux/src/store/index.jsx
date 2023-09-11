import { configureStore } from '@reduxjs/toolkit';
import book from './modules/bookSlice';
import user from './modules/authSlice';

export const store = configureStore({
   reducer: { book, user },
});
