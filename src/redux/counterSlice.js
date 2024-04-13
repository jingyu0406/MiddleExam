import { createSlice } from "@reduxjs/toolkit";

//Define Slice(include reducers and action)
const initialState = { counterValue: 0, colorMode: "light" };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    //可以修改狀態的操作
    reducers: {
        toggleColorMode: (state) => {
            state.colorMode = state.colorMode === "light" ? "dark" : "light";
        }
    }
});


export const selectCounter = (state) => state.counter.counterValue;
export const selectColorMode = (state) => state.counter.colorMode;
export const { toggleColorMode } = counterSlice.actions;
export default counterSlice.reducer;