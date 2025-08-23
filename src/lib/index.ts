import { configureStore } from "@reduxjs/toolkit";
import  signInSlice  from "./features/signInSlice";
import authSlice  from "./features/authSlice";

export const store = configureStore({
    reducer: {
        signInSlice,
        authSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
