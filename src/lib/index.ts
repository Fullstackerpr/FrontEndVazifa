import { configureStore } from "@reduxjs/toolkit";
import users from './features/createSlice'

const store =  configureStore({
    reducer: {
        users
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store