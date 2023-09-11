import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
   userId: { email: '', password: '' },
   user: JSON.parse(localStorage.getItem('user')) || null,
   user: storedUser,
   authed: !!storedUser,
};

export const authSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      loginInput(state, action) {
         const { name, value } = action.payload;

         state.userId = {
            ...state.userId,
            [name]: value,
         };
      },
      login(state, action) {
         const logUser = {
            id: 'a123',
            email: action.payload.email,
         };
         localStorage.setItem('user', JSON.stringify(logUser));
         if (action.payload.password === '1234') {
            state.user = logUser;
            state.authed = true;
         }
      },
      logout(state, action) {
         localStorage.removeItem('user');
         state.user = null;
         state.authed = false;
         state.userId = {};
      },
   },
});
export const { login, logout, loginInput } = authSlice.actions;
export default authSlice.reducer;
