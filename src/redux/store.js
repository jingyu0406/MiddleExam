import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './messageSlice'
import toggleSlice from './toggleSlice';
import borrowSlice from './borrowSlice';
import buildingSlice from './building/buildingSlice';

export default configureStore({
    reducer: {
        message: messageSlice,
        toggle: toggleSlice,
        borrow: borrowSlice,
        building: buildingSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})






