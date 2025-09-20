import { memo } from "react";
import { useUser } from "../lib/useUser";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const View = () => {
  const { users, removeUser } = useUser();
  const navigate = useNavigate()

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
              className="flex justify-between rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  {item.username}
                </h1>
                <p className="mt-2 text-sm text-gray-600">{item.password}</p>
              </div>
              <div className="flex flex-col">
                <button onClick={() => navigate("/", {state: {id: item.id}})}>
                  <Pencil
                    size={20}
                    color="yellow"
                    className="mb-2 cursor-pointer"
                  />
                </button>
                <button onClick={() => removeUser(item.id)}>
                  <Trash2 size={20} color="red" className="cursor-pointer" />
                </button>
              </div>
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
