import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // items is an array of objects with the following structure:
    // {
    //   id: number,
    //   name: string,
    //   price: number,
    //   quantity: number
    // }
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (item) 
        {
          // If item already exists, increase quantity
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decreaseItem(state, action) {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (i) => i.id !== action.payload
        );
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem(state, action) {
      state.items = state.items.filter(
        (i) => i.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addItem, decreaseItem, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
