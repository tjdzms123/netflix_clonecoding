import { configureStore } from '@reduxjs/toolkit'
import auth from '../modules/authSlice'
import profile from '../modules/ProfileSlice'
import modalSlice from '../modules/modalSlice'

const store = configureStore({
  reducer: {
    auth,
    profile,
    modalSlice
  },
})

export default store
