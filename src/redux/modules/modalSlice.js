import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOnOff: (state, action) => {
      state.modal = !action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { modalOnOff } = modalSlice.actions;
