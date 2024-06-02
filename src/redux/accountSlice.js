// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
        },
    },
});

export const { logIn, logOut } = accountSlice.actions;
export const selectIsLoggedIn = (state) => state.account.isLoggedIn;

export default accountSlice.reducer;
