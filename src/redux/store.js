import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './messageSlice'
import toggleSlice from './toggleSlice';
import borrowSlice from './borrowSlice';
import buildingSlice from './building/buildingSlice';
import announcementSlice from './announcementSlice';
import nearestSlice from './nearestSlice'
import accountSlice from './accountSlice';
import emailSlice from './emailSlice';
import nameSlice from './nameSlice';

export default configureStore({
    reducer: {
        announcement: announcementSlice,
        message: messageSlice,
        toggle: toggleSlice,
        borrow: borrowSlice,
        building: buildingSlice,
        nearest: nearestSlice,
        account: accountSlice,
        email: emailSlice,
        name:nameSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})






