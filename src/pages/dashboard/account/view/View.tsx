import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../../lib";
import type { IData } from "../../../../types";
import { get, remove } from "../../../../lib/features/createSlice";

const View = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  const handleUpdate = (user: IData) => {
    dispatch(get(user));
    navigate("/dashboard/account");
  };

  return (
    <div className="flex justify-center py-10">
      <div className="container bg-white w-[1000px] rounded-xl shadow-xl p-6 border border-gray-100">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="p-3 border">#</th>
              <th className="p-3 border">First Name</th>
              <th className="p-3 border">Last Name</th>
              <th className="p-3 border">Phone Number</th>
              <th className="p-3 border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-3 border text-gray-700 font-medium">
                  {index + 1}
                </td>
                <td className="p-3 border text-gray-700">{item.fname}</td>
                <td className="p-3 border text-gray-700">{item.lname}</td>
                <td className="p-3 border text-gray-700">{item.phone}</td>
                <td className="p-3 border flex justify-center gap-3">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded-lg shadow-sm transition-all"
                    onClick={() => handleUpdate(item)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg shadow-sm transition-all"
                    onClick={() => dispatch(remove(item.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center text-gray-500 py-10 font-medium"
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

export default React.memo(View);
