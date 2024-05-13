import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    AnnouncementContent: [
        {
            text: "2024/05/07",
            text2: "版本更新1.0.0.21",
            id: "test1"
        },
        {
            text: "2024/05/06 ",
            text2: "定期維護,修正些許Bug",
            id: "test2"
        },
        {
            text: "2024/05/05 ",
            text2: "版本更新1.0.0.1",
            id: "test3"
        },
        {
            text: "2024/04/29 ",
            text2: "定期維護",
            id: "test4"
        },
        {
            text: "2024/04/20 ",
            text2: "版本更新1.0.0.0.9",
            id: "test5"
        },


    ]
};

const AnnouncementSlice = createSlice({
    name: "announcement",
    initialState,
    reducers: {
        Announcement: (state, action) => {
            state.AnnouncementContent.push(action.payload);
        }
    }
})
export const selectAnnouncement = (state) => state.announcement.AnnouncementContent
export const { writeAnnouncement } = AnnouncementSlice.actions
export default AnnouncementSlice.reducer