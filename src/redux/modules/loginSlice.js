import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios/api";
import axios from 'axios';

const initialState = {
    signup: {
        email:'',
        password:'',
        isLogin: false,
        isLoading: false,
        isError: null,
    }
};
//회원가입 -> post
//로그인 -> post
export const __signUp = createAsyncThunk(
    "SIGN_UP",
    async (payload,thunkAPI) => {
        try {
            await axios.post('http://52.78.166.176:3000/user/signup',payload)
            // await instance.post(`${process.env.REACT_APP_NETFLIX_KEY}/user/singup`, payload) 
            return thunkAPI.fulfillWithValue(payload)
        }
        catch (error) {
            // const errorMsg = error.response.data.msg
            // alert(`${errorMsg}`)
            return thunkAPI.rejectWithValue(error)
        }
    }
);

export const __login = createAsyncThunk(
    "LOGIN",
    async (payload,thunkAPI) => {
        try {
            const data = await instance.post(`${process.env.REACT_APP_NETFLIX_KEY}/login`, payload)
            console.log(data);
            return thunkAPI.fulfillWithValue(data)
        }
        catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);


const signupSlice = createSlice({
    name:"signup",
    initialState,
    extraReducers: {

    }
});

export const {} = signupSlice.actions;
export default signupSlice.reducer;