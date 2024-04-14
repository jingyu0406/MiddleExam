import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    messageContent: [
        {
            text: "為什麼篤行樓永遠都沒傘==", id: "test1"
        },
        {
            text: "有人在明德樓625撿到airpods嗎?拜託有撿到的聯繫我，找到會請星巴克", id: "test2"
        },
        {
            text: "有人現在要來學餐嗎 可不可以幫我借把傘過來還...被卡在這裡好久了QQ", id: "test3"
        },
        {
            text: "我sogo台北的天氣了!!!!!!!", id: "test4"
        },
        {
            text: "早安 今天適合吃蛋餅", id: "test5"
        },
        {
            text: "乾 忘記上次已經借過傘 忘在家裡忘記拿過來 這次不能再借了TAT", id: "test6"
        },
        {
            text: "今天天氣好好", id: "test7"
        },
        {
            text: "有人有明天XXX老師要考試的東西嗎 他上課講話超慢超想睡覺 根本就沒在上", id: "test8"
        },
        {
            text: "Today is a bad day", id: "test9"
        },

    ]
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        writeMessage: (state, action) => {
            state.messageContent.push(action.payload);
        }
    }
})
export const selectMessage = (state) => state.message.messageContent
export const { writeMessage } = messageSlice.actions
export default messageSlice.reducer