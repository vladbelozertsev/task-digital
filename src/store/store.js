import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./grid-slice";

export default configureStore({
  reducer: {
    grid: gridReducer,
  },
});
