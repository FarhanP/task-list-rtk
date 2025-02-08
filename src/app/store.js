import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todolist/todoslice";

// Create the store
export const store = configureStore({
  reducer: todoReducer,
});
