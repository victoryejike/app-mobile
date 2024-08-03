import { configureStore } from "@reduxjs/toolkit";

import favouriteReducer from "./favourite.slice";

export const store = configureStore({
  reducer: {
    favouriteMeals: favouriteReducer,
  },
});
