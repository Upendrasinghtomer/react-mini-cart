import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../api/productsApi";

const initialState = {
  products: [],
};

export const getProducts = createAsyncThunk("/products", async () => {
  const res = await productsApi.getProducts();
  return res.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: [...action.payload],
      };
    },
  },
});

const { reducer } = productsSlice;
export default reducer;
