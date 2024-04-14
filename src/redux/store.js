import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './messageSlice'
import toggleSlice from './toggleSlice';
import borrowSlice from './borrowSlice';
import DuXingSlice from './building/DuXingSlice';

export default configureStore({
    reducer: {
        message: messageSlice,
        toggle: toggleSlice,
        borrow: borrowSlice,
        DuXing: DuXingSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})






