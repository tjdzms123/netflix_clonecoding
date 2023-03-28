import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../modules/authSlice'
import profile from '../modules/ProfileSlice'
import modalSlice from '../modules/modalSlice'

const store = configureStore({
  reducer: {
    authSlice,
    profile,
    modalSlice
  },
})

export default store
