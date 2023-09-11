import { configureStore } from '@reduxjs/toolkit';
import staff from './modules/staffSlice';
import user from './modules/authSlice';

export const store = configureStore({
   reducer: { staff, user },
});
