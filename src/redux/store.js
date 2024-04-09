import  {configureStore} from '@reduxjs/toolkit'
import messageSlice from './messageSlice'

export default configureStore({
    reducer:{
        message: messageSlice
    }
})