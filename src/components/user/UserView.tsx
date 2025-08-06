// UserView.tsx
import React, { type Dispatch, type FC, type SetStateAction } from "react";
import type { IStudents } from "../static";

interface Props {
  data: IStudents[];
  onDelete: (id: number) => void;
  setEditing: Dispatch<SetStateAction<IStudents | null>>;
}

const UserView: FC<Props> = ({ data, onDelete, setEditing }) => {
  return (
    <div className="container p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Students List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">Full Name</th>
            <th className="p-3 border-b">Age</th>
            <th className="p-3 border-b">Email</th>
            <th className="p-3 border-b">Major</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((student: IStudents, index) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{index + 1}</td>
              <td className="p-3 border-b">{student.fullName}</td>
              <td className="p-3 border-b">{student.age}</td>
              <td className="p-3 border-b">{student.email}</td>
              <td className="p-3 border-b">{student.major}</td>
              <td className="p-3 border-b space-x-2">
                <button
                  onClick={() => setEditing(student)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(student.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(UserView);
