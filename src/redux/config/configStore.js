import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../modules/authSlice'
import modalSlice from '../modules/modalSlice'

const store = configureStore({
  reducer: {
    authSlice,
    modalSlice
  },
})

export default store
