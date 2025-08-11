import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types";

interface IWishlist {
    data: IProduct[],
}

const initialState: IWishlist = {
    data: []
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleWishes: (state, action: PayloadAction<IProduct>)=>{
            const index = state.data.findIndex((item) => item.id === action.payload.id)
            if(index < 0){
                state.data.push(action.payload)
            }else{
                state.data.splice(index, 1)
            }
        }
    }
})

export const {toggleWishes} = wishlistSlice.actions
export default wishlistSlice.reducer