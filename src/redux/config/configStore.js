import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../modules/authSlice'

const store = configureStore({
  reducer: {
    authSlice,
  },
})

export default store
