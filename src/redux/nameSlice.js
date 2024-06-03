

import { createSlice } from "@reduxjs/toolkit";


export const nameSlice = createSlice({
    name: 'name',
    initialState: {
        userName: '',
    },
    reducers: {
        setName: (state, action) => {
            state.userName = action.payload;
        },
    },
});

export const { setName } = nameSlice.actions;
export const selectUserName = (state) => state.name.userName;

export default nameSlice.reducer;
