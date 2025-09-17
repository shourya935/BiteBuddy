import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurantName: null,
    restaurantLocality: null,
  },
  reducers: {
    additem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      if (!state.restaurantName) {
        state.restaurantName = newItem.restaurantName;
      }
      if (!state.restaurantLocality) {
        state.restaurantLocality = newItem.restaurantLocality;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id == id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.restaurantName = null;
    },
  },
});

export const { additem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// 1. export const { additem, removeItem, clearCart } = cartSlice.actions

// When you create a slice with createSlice, RTK auto-generates action creators for each reducer function you define.

// Example: You defined additem, removeItem, and clearCart inside reducers.

// RTK automatically creates action creators like:

// additem(payload) → { type: "cart/additem", payload }
// removeItem() → { type: "cart/removeItem" }
// clearCart() → { type: "cart/clearCart" }

// These live in cartSlice.actions.

// Instead of writing boilerplate action creators manually, you destructure and export them:

// export const { additem, removeItem, clearCart } = cartSlice.actions;

// Now, in your component, you can directly do:

// import { useDispatch } from "react-redux";
// import { additem } from "./cartSlice";

// const dispatch = useDispatch();
// dispatch(additem({ id: 1, name: "Pizza" }));  // dispatches { type: "cart/additem", payload: {...} }

// ✅ This way, you don’t have to manually define function additem(payload) { return { type: "cart/additem", payload }; } like in old Redux.

// 2. export default cartSlice.reducer

// Every slice also creates a reducer function under the hood.

// That reducer knows how to handle the slice’s actions (additem, removeItem, clearCart).

// You need to pass this reducer to the Redux store setup:

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,   // slice name: reducer
//   },
// });

// That’s why we export default cartSlice.reducer.

// ✅ So the reducer becomes the "engine" that updates your state, and the exported action creators become the "buttons" you press to trigger it.
