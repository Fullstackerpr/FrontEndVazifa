import { memo } from "react";
import { useUser } from "../../api/hooks";

const View = () => {
  const { getUser, deleteUser } = useUser();
  const { data } = getUser();

  return (
    <div className="flex justify-center py-10">
      <div className="container bg-white w-[1000px] rounded-xl shadow-xl p-6 border border-gray-100">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white font-semibold">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Full Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item: any, index: number) => (
              <tr key={item.id}>
                <td className="border p-3">{index + 1}</td>
                <td className="border p-3">{item.full_name}</td>
                <td className="border p-3">{item.email}</td>
                <td className="border p-3">{item.username}</td>
                <td className="border p-3">{item.phone_number}</td>
                <td className="border p-3 text-center space-x-2">
                  {/* <button
                    onClick={() =>
                      (item)
                    }
                    className="bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    Edit
                  </button> */}
                  <button
                    onClick={() => deleteUser.mutate(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {(!data || data.length === 0) && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-6 text-gray-500 italic"
                >
                  No data submitted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(View);