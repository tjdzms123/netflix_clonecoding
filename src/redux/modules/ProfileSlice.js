import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// 쿠키값 넣어주기

//초기값
const initialState = {
    profile: [],
    isLoading: false,
    isError: false,
    error: null,
  };

  