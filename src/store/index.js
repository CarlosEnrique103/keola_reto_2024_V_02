import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import subsReducer from "./subs/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    subs: subsReducer,
  },
});
