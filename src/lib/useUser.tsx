import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUser {
  id: number;
  username: string;
  password: string;
}

type Store = {
  users: IUser[];
  addUser: (payload: IUser) => void;
  getUser: (id: number) => IUser | undefined;
  removeUser: (payload: number) => void;
  updateUser: (payload: IUser) => void;
};

export const useUser = create<Store>()(
  persist(
    (set, get) => ({
      users: [],

      addUser: (payload: IUser) =>
        set((state) => ({
          users: [...state.users, payload],
        })),

      getUser: (id: number) => {
        const { users } = get();
        return users.find((u) => u.id === id);
      },

      removeUser: (payload: number) =>
        set((state) => ({
          users: state.users.filter(({ id }) => id !== payload),
        })),

      updateUser: (payload: IUser) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === payload.id ? { ...user, ...payload } : user
          ),
        })),
    }),
    {
      name: "userStorage",
    }
  )
);
