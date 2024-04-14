import { createSlice } from "@reduxjs/toolkit";

//Define Slice(include reducers and action)
const initialState = { 
    umbrellaSum: [
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
    ] 
};

const buildingSlice = createSlice({
    name: "building",
    initialState,
    //可以修改狀態的操作
    reducers: {
        buildingUmbrellaPlus: (state, action) => {
            const id = action.payload; // 從action中獲取id
            state.umbrellaSum[id] += 1;
        },
        buildingUmbrellaMinus: (state, action) => {
            const id = action.payload; // 從action中獲取id
            state.umbrellaSum[id] -= 1;
        }
    }
});

export const selectBuilding = (state) => state.building.umbrellaSum;
export const { buildingUmbrellaPlus, buildingUmbrellaMinus } = buildingSlice.actions;
export default buildingSlice.reducer;