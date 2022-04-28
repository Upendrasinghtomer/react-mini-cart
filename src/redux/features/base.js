import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../api/baseApi";

const initialState = {
  banners: [],
  showAlert: false,
  alertType: "error",
  alertTitle: "Success",
  alertMessage: "",
};

export const getBanners = createAsyncThunk("/banners", async () => {
  const res = await baseApi.getBanners();
  return res.data;
});

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    openAlert(state, action) {
      state.showAlert = true;
      state.alertTitle = action.payload.alertTitle;
      state.alertMessage = action.payload.alertMessage;
      state.alertType = action.payload.alertType;
    },
    closeAlert(state, action) {
      state.showAlert = false;
    },
  },
  extraReducers: {
    [getBanners.fulfilled]: (state, action) => {
      return {
        ...state,
        banners: [...action.payload],
      };
    },
  },
});

const { reducer } = baseSlice;
export const { openAlert, closeAlert } = baseSlice.actions;
export default reducer;
