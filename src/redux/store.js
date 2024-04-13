import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './messageSlice'
import toggleSlice from './toggleSlice';

export default configureStore({
    reducer: {
        message: messageSlice,
        toggle: toggleSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
})






