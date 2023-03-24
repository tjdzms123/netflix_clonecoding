import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {

}

// ================== thunk ==================
export const __ = createAsyncThunk('', async (thisUser, thunk) => {
  try {

  } catch (e) {

  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
  extraReducers: {},
})
export const { } = authSlice.actions
export default authSlice.reducer

