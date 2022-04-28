import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  totalPrice: 0,
  items: [],
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addProductToCart(state, action) {
      const newItems = addCartItem(state.items, action.payload);
      state.items = newItems;
      state.totalPrice = state.items.reduce((acc, val, i) => {
        return (acc += val.quantity * val.price);
      }, 0);
    },
    removeProductFromCart(state, action) {
      const newItems = removeCartItem(state.items, action.payload);
      state.items = newItems;
      state.totalPrice = state.items.reduce((acc, val, i) => {
        return (acc += val.quantity * val.price);
      }, 0);
    },
  },
});

const { reducer } = cartSlice;
export const { toggleCart, addProductToCart, removeProductFromCart } = cartSlice.actions;
export default reducer;
