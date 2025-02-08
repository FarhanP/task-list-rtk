import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todolist/todoSlice";

// Create the store
export const store = configureStore({
  reducer: todoReducer,
});
