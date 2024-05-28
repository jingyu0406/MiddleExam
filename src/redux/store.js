import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './messageSlice'
import toggleSlice from './toggleSlice';
import borrowSlice from './borrowSlice';
import buildingSlice from './building/buildingSlice';
import announcementSlice from './announcementSlice';
import nearestSlice from './nearestSlice'

export default configureStore({
    reducer: {
        announcement: announcementSlice,
        message: messageSlice,
        toggle: toggleSlice,
        borrow: borrowSlice,
        building: buildingSlice,
        nearest: nearestSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})






