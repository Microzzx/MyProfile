import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import counterReducer from "./slices/counterSlice.ts";
import playerReducer from "./slices/playerSlice.ts";

const reducer = {
  counterReducer,
  playerReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//useDispatch<AppDispatch>(); to useAppDispatch();
export const useAppDispatch = () => useDispatch<AppDispatch>();
