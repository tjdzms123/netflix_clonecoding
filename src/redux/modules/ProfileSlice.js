import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { instance } from "../../axios/api";
// 쿠키값 넣어주기

//초기값
const initialState = {
  profile: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const __getprofile = createAsyncThunk(
  "GET_PROFILE",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post("/profile", payload)
      // const data = await axios.get(`${process.env.REACT_APP_NETFLIX_KEY}/profile/${payload}`)
      return thunkAPI.fulfillWithValue(data.data)
    }
    catch (error) {
      const errorMsg = error.response.data.errorMessage;
      alert(`${errorMsg}`)
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: {
    [__getprofile.pending]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__getprofile.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.profile = action.payload;
    },
    [__getprofile.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = true;
    },
  }
})

export default profileSlice.reducer