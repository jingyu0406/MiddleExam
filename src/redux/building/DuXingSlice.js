import { createSlice } from "@reduxjs/toolkit";

//Define Slice(include reducers and action)
const initialState = { umbrellaSum: 3 };

const DuXingSlice = createSlice({
    name: "DuXing",
    initialState,
    //可以修改狀態的操作
    reducers: {

        DuXingUmbrellaPlus:(state)=>{
            state.umbrellaSum +=1;
        },
        DuXingUmbrellaMinus:(state)=>{
            state.umbrellaSum -=1;
        }
    }
});

export const selectDuXing = (state) => state.DuXing.umbrellaSum;
export const { DuXingUmbrellaMinus,DuXingUmbrellaPlus } = DuXingSlice.actions;
export default DuXingSlice.reducer;