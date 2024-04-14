import { createSlice } from "@reduxjs/toolkit";

//Define Slice(include reducers and action)
const initialState = { borrowed: false };

const borrowSlice = createSlice({
    name: "borrow",
    initialState,
    //可以修改狀態的操作
    reducers: {
        borrowToggle: (state) => {
            state.borrowed = state.borrowed === true ? false : true;
        }
    }
});

export const selectBorrow = (state) => state.borrow.borrowed;
export const { borrowToggle } = borrowSlice.actions;
export default borrowSlice.reducer;