import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './messageSlice'
import toggleSlice from './toggleSlice';
import borrowSlice from './borrowSlice';

export default configureStore({
    reducer: {
        message: messageSlice,
        toggle: toggleSlice,
        borrow: borrowSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
})






