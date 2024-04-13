import { createSlice } from "@reduxjs/toolkit";

//Define Slice(include reducers and action)
const initialState = { counterValue: 0, colorMode: "light" };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    //可以修改狀態的操作
    reducers: {
        increaseCounter: (state) => {
            state.counterValue += 1;
        },
        decreaseCounter: (state) => {
            state.counterValue -= 1;
        },
        toggleColorMode: (state) => {
            state.colorMode = state.colorMode === "light" ? "dark" : "light";
        }
    }
});


export const selectCounter = (state) => state.counter.counterValue;
export const selectColorMode = (state) => state.counter.colorMode;
export const { increaseCounter, decreaseCounter, toggleColorMode } = counterSlice.actions;
export default counterSlice.reducer;