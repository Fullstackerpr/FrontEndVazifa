import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../../components/ui/Skeleton";

const Todos = () => {
  const { data, error, loading } = useFetch("todos");

  if (loading) return <Skeleton count={12} />;

  return (
    <>
      {error && <ErrorWid />}

      <div className="bg-white w-[1000px] rounded-lg shadow-lg p-4 mx-auto mt-[50px]">
        <table className="w-full border-collapse table-auto">
          <thead className="bg-teal-600 text-white text-left">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">TODO</th>
              <th className="p-3 border">Comleted</th>
              <th className="p-3 border">User Id</th>
            </tr>
          </thead>
          <tbody>
            {data.todos.map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{item.todo}</td>
                <td className="p-2 border">{item.completed}</td>
                <td className="p-2 border">{item.userId}</td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center text-gray-500 py-10 font-medium"
                >
                  No data submitted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todos;
