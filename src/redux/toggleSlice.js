import { createSlice } from "@reduxjs/toolkit";

//Define Slice(include reducers and action)
const initialState = { toggleValue: "light" };

const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    //可以修改狀態的操作
    reducers: {
        toggleColorMode: (state) => {
            state.toggleValue = state.toggleValue === "light" ? "dark" : "light";
        }
    }
});

export const selectToggle = (state) => state.toggle.toggleValue;
export const { toggleColorMode } = toggleSlice.actions;
export default toggleSlice.reducer;