import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState{
    email: string
    password: string
}

const initialState: IState = {
    password: "",
    email: ""
}

export const signInSlice = createSlice({
    name: "sign-in",
    initialState,
    reducers: {
        setSignInData:(state, action: PayloadAction<IState>) => {
            state.email = action.payload.email
            state.password = action.payload.password
        },
        clearSignInData :(state) => {
            state.email = ""
            state.password = ""
        }
    }
})

export const {clearSignInData,setSignInData} = signInSlice.actions
export default signInSlice.reducer