import { useQuery } from "@tanstack/react-query";
import { memo, useEffect } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { removeToken } from "../../lib/features/authSlice";

const Profile = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["auth"],
    queryFn: () => api.get("/auth/me"),
    retry: 0,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(removeToken());
    }
  }, [isError, dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  const user = data?.data;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        {user ? (
          <div className="space-y-3">
            <p className="text-lg">
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </div>
        ) : (
          <p className="text-gray-600">No user data available.</p>
        )}
      </div>
    </div>
  );
};

export default memo(Profile);
