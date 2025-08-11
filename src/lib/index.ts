import { configureStore } from '@reduxjs/toolkit'
import counter from './features/counterSlice'
import wishlistSlice from './features/wishlistSlice'
import cart from './features/cartSlice'

export const store = configureStore({
  reducer: {
    counter,
    wishlistSlice,
    cart
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch