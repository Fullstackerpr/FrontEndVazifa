import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IData } from "../../types";

interface UsersSlice {
  users: IData[];
  updateUser: IData | null;
}

const initialState: UsersSlice = {
  users: JSON.parse(localStorage.getItem("users") || "[]") || [],
  updateUser: null,
};

export const CreateAcc = createSlice({
  name: "users",
  initialState,
  reducers: {
    create: (state, actions: PayloadAction<IData>) => {
      state.users = [...state.users, actions.payload];
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    remove: (state, actions: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id != actions.payload);

      localStorage.setItem("users", JSON.stringify(state.users));
    },
    get: (state, actions: PayloadAction<IData>) => {
      state.updateUser = actions.payload;
    },
    update: (state, actions: PayloadAction<IData>) => {
      state.users = state.users.map((user) =>
        user.id == actions.payload.id ? { ...user, ...actions.payload } : user
      );
      localStorage.setItem("users", JSON.stringify(state.users));
      state.updateUser = null;
    },
  },
});

export const { create, get, update, remove } = CreateAcc.actions;
export default CreateAcc.reducer;
