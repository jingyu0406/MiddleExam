import {createSlice} from "@reduxjs/toolkit"

const initialState={messageContent:[
    {
        text:"為什麼篤行樓永遠都沒傘==",id:"test1"
    },
    {
        text:"有人在明德樓625撿到airpods嗎?拜託有撿到的聯繫我，找到會請星巴克",id:"test2"
    },
    {
        text:"有人現在要來學餐嗎 可不可以幫我借把傘過來還...被卡在這裡好久了QQ", id:"test3"
    },
    {
        text:"test123", id:"test4"
    },
    {
        text:"今天天氣好好", id:"test5"
    },
    {
        text:"今天天氣好好", id:"test6"
    },
    {
        text:"今天天氣好好", id:"test7"
    },
    {
        text:"今天天氣好好", id:"test8"
    },
    {
        text:"今天天氣好好", id:"test9"
    },

]};

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