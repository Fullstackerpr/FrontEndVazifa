import { memo } from "react";
import { useUser } from "../lib/useUser";

const View = () => {
  const { users } = useUser();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Users
      </h2>

      {users?.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((item: any) => (
            <div
              key={item.id}
              className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <h1 className="text-lg font-semibold text-gray-800">
                {item.username}
              </h1>
              <p className="mt-2 text-sm text-gray-600">{item.password}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default memo(View);
