import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoriesApi from "../../api/categoriesApi";
const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("/categories", async () => {
  const res = await categoriesApi.getCategories();
  return res.data;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      return {
        ...state,
        categories: [...action.payload],
      };
    },
  },
});

const { reducer } = categoriesSlice;
export default reducer;
