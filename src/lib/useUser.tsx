import { create } from "zustand";

export interface IUser {
  id: number;
  username: string;
  password: string;
}

type Store = {
  users: IUser[];
  addUser: (payload: IUser) => void;
  removeUser: (payload: number) => void;
};

export const useUser = create<Store>()((set) => ({
  users: [],
  addUser: (payload: IUser) =>
    set((state) => {
      return { users: [...state.users, payload] };
    }),

  removeUser: (payload: number) =>
    set((state) => {
      return { users: state.users.filter(({ id }) => id !== payload) };
    }),
}));
