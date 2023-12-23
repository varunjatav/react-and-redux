import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_STATE } from "../data/items";

const itemSlice = createSlice({
  name: "items",
  initialState: DEFAULT_STATE,
  reducers: {
    addInitialItems: (store, actions) => {
      return store;
    },
  },
});

export default itemSlice;
export const itemActions = itemSlice.actions;



