import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios/api";
import axios from 'axios';
import { cookies } from "../../shared/cookies";

const initialState = {
    signup: {
        email: '',
        password: '',
        isLogin: false,
        isLoading: false,
        isError: null,
    }
};
//회원가입 -> post
//로그인 -> post
export const __signUp = createAsyncThunk(
    "SIGN_UP",
    async (payload, thunkAPI) => {
        try {
            await instance.post("/user/signup", payload)
            alert("회원가입에 성공했습니다.")
            return thunkAPI.fulfillWithValue(payload)
        }
        catch (error) {
            const errorMsg = error.response.data.errorMessage;
            alert(`${errorMsg}`)
            return thunkAPI.rejectWithValue(error)
        }
    }
);

export const __login = createAsyncThunk(
    "LOGIN",
    async (payload, thunkAPI) => {
        try {
            const data = await instance.post("/user/login", payload)
            // console.log(data);
            // console.log(data.data);

            cookies.set("token", data.headers.authorization, { path: "/" });
            // return thunkAPI.fulfillWithValue(data.data)
            return thunkAPI.fulfillWithValue(payload)
            //-> 이때의 인자가 action object로 들어가는 것
            // return thunkAPI.fulfillWithValue(data) //-> A non-serializable value was detected in an action, in the path: `payload.headers`.
        }
        catch (error) {
            const errorMsg = error.response.data.errorMessage;
            // console.log("에러메시지", errorMsg);
            alert(`${errorMsg}`);
            // console.log(error);

            return thunkAPI.rejectWithValue(payload);
            // return thunkAPI.rejectWithValue(error);
        }
    }
);


const signupSlice = createSlice({
    name: "signup",
    initialState,
    extraReducers: {

    }
});

export const { } = signupSlice.actions;
export default signupSlice.reducer;