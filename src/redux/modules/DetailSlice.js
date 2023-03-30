import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios/api";

//조회
export const __getDetail = createAsyncThunk(
  "getDetail",
  async (contentIdx, thunkAPI) => {
    console.log(contentIdx);
    try {
      const response = await instance.get(`/movies/detail/${contentIdx}`,
        {
          headers: {
            Authorization: decodeURI(document.cookie).replace("token=", ""),
          },

          params: {
            contentIdx: `${contentIdx}`
          }
        }
      )
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  content: [],
  isLoading: false,
  isDelete: false,
  // isEdit: false,
  error: null,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    // 조회
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__getDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { } = detailSlice.actions;
export default detailSlice.reducer;
