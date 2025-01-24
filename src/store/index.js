import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./reducer/eventReducer";

const store = configureStore({
  reducer: { eventReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});
export default store;
