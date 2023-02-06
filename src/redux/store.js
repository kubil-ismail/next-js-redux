import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, } from "next-redux-wrapper";
import counterReducer from "./reducer/counter";

export const store = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

export const wrapper = createWrapper(store, { debug: true });
