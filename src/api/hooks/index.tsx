import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const user = "users";

export const useUser = () => {
  const client = useQueryClient();

  const getUser = () =>
    useQuery({
      queryKey: [user],
      queryFn: () => api.get("users").then((res) => res.data),
    });

  const getByUser = (id: number) =>
    useQuery({
      queryKey: [user],
      queryFn: () => api.get(`users/${id}`).then((res) => res.data),
    });

  const createUser = useMutation({
    mutationFn: (data: any) => api.post("users", data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [user] });
    },
  });

  const deleteUser = useMutation({
    mutationFn: (id: number) => api.delete(`users/${id}`),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [user] });
    },
  });

  const updateUser = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      api.patch(`users/${id}`, data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [user] });
    },
  });

  return {getUser, getByUser, createUser, updateUser, deleteUser}
};
