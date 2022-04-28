import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart";
import baseReducer from "./features/base";
import categoriesReducer from "./features/categories";
import productsReducer from "./features/products";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    base: baseReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
});

export default store;
