import { createSlice } from "@reduxjs/toolkit";

// Define Slice(include reducers and action)
const initialState = { id: null };

const nearestSlice = createSlice({
    name: "Nearest",
    initialState,
    // 可以修改狀態的操作
    reducers: {
        setNearest: (state, action) => {
            state.id = action.payload;
        }
    }
});

export const selectNearest = (state) => state.nearest.id;
export const { setNearest } = nearestSlice.actions;
export default nearestSlice.reducer;