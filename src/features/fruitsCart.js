import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const fruitsCart = createSlice({
  name: "fruitsCart",
  initialState,
  reducers: {
    addOne: (state, action) => {
      const fruitIndex = state.cart.findIndex((obj) => obj.id === action.payload.id);

      if (fruitIndex !== -1) {
        state.cart[fruitIndex].quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne: (state, action) => {
      const fruit = state.cart.find((obj) => obj.id === action.payload);

      if (fruit) {
        if (fruit.quantity === 1) {
          state.cart = state.cart.filter((fruit) => fruit.id !== action.payload);
        } else {
          fruit.quantity--;
        }
      }
    },
  },
});

export const { addOne, removeOne } = fruitsCart.actions;
export default fruitsCart.reducer;
