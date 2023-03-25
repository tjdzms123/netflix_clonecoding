import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    signup: {
        email:'',
        password:'',
        nick:'',
        isLogin: false,
        isLoading: false,
        isError: null,
    }
};




const signupSlice = createSlice({
    name:"signup",
    initialState,
    extraReducers: {

    }
});

export const {} = signupSlice.actions;
export default signupSlice.reducer;