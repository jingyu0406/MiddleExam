// redux/emailSlice.js

import { createSlice } from "@reduxjs/toolkit";


export const emailSlice = createSlice({
    name: 'email',
    initialState: {
        userEmail: '',
    },
    reducers: {
        setEmail: (state, action) => {
            state.userEmail = action.payload;
        },
    },
});

export const { setEmail } = emailSlice.actions;
export const selectUserEmail = (state) => state.email.userEmail;

export default emailSlice.reducer;
