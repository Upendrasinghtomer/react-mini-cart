import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoriesApi from "../../api/categoriesApi";
const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("/categories", async () => {
  const res = await categoriesApi.getCategories();
  const data = res.data.sort((a, b) => (a.order > b.order ? 1 : -1));
  const filtered = data.filter((x) => x.order > 0);
  return filtered;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      return {
        categories: [...action.payload],
      };
    },
  },
});

const { reducer } = categoriesSlice;
export default reducer;
