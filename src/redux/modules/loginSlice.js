import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios/api";
import { cookies } from "../../shared/cookies";

const initialState = {
    signup: {
        email: '',
        password: '',
        isLogin: false,
        isLoading: cookies.get("token") ? true : false,
        isError: null,
    }
};

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
            cookies.set("token", data.headers.authorization, { path: "/" });
            return thunkAPI.fulfillWithValue(payload)
            //-> 이때의 인자가 action object로 들어가는 것
            // return thunkAPI.fulfillWithValue(data) //-> A non-serializable value was detected in an action, in the path: `payload.headers`.
        }
        catch (error) {
            const errorMsg = error.response.data.errorMessage;
            alert(`${errorMsg}`);
            return thunkAPI.rejectWithValue(payload);
        }
    }
);


const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
            cookies.remove("token")
        }
    }
});

export default signupSlice.reducer;