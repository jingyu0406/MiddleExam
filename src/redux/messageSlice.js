import {createSlice} from "@reduxjs/toolkit"

const initialState={messageContent:[]};

const messageSlice= createSlice({
    name:"message",
    initialState,
    reducers:{
        writeMessage:(state,action)=>{
            state.messageContent.push(action.payload);
        }
    }
})
export const selectMessage= (state)=>state.message.messageContent
export const {writeMessage} = messageSlice.actions
export default messageSlice.reducer