//EH profileToken State set

// import { createSlice } from "@reduxjs/toolkit";
// import { cookies } from "../../shared/cookies";

// const initialState = {
//     isProfileLogin: cookies.get("profileToken") ? true : false,
// };

// // 은선 님 profile login -> resonse 쿠키에 cookies.set("profileToken") 이런 식으로

// export const authSlice = createSlice({
//     name: "profileToken",
//     initialState,
//     reducers: {
//         login(state) {
//             state.isProfileLogin = true;
//         },
//         logout(state) {
//             state.isProfileLogin = false;
//             cookies.remove("profileToken");
//         },
//     },
// });

// export const isProfileLoginActions = profileTokenSlice.actions;
// export default profileTokenSlice.reducer;