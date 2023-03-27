import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios/api";

const initialState = {
    signup: {
        email:'',
        password:'',
        isLogin: false,
        isLoading: false,
        isError: null,
    }
};

export const __signUp = createAsyncThunk(
    "SIGN_UP",
    async (newUser,thunkAPI) =>{
        try {
            await instance.post("/instance/singup", newUser) 
            return thunkAPI.fulfillWithValue(newUser)
        }
        catch (error) {
            const errorMsg = error.response.data.msg
            alert(`${errorMsg}`)
            return thunkAPI.rejectWithValue(error)
        }
    }
);

export const __login = createAsyncThunk()

const signupSlice = createSlice({
    name:"signup",
    initialState,
    extraReducers: {

    }
});

export const {} = signupSlice.actions;
export default signupSlice.reducer;