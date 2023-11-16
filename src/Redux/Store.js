import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slices/Cartslice";

export const store = configureStore({
  reducer: {
    cart: Cartslice,
  },
});
