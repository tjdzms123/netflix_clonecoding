import { createSlice } from "@reduxjs/toolkit";
import { cookies } from "../../shared/cookies";

const initialState = {
    isLogin: cookies.get("token") ? true : false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
            cookies.remove("token");
        },
    },
});

export const isLoginActions = authSlice.actions;
export default authSlice.reducer;