import { configureStore } from '@reduxjs/toolkit'
import messageSlice from './messageSlice'
import counterReducer from './counterSlice';

export default configureStore({
    reducer: {
        message: messageSlice,
        counter: counterReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})






