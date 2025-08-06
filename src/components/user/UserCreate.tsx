// UserCreate.tsx
import React, {
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { IStudents } from "../static";
import { Link } from "react-router-dom";

interface Props {
  setData: Dispatch<SetStateAction<IStudents[]>>;
  editing: IStudents | null;
  setEditing: Dispatch<SetStateAction<IStudents | null>>;
}

const UserCreate: FC<Props> = ({ setData, editing, setEditing }) => {
  const [fullName, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");

  useEffect(() => {
    if (editing) {
      setFullname(editing.fullName);
      setAge(String(editing.age));
      setEmail(editing.email);
      setMajor(editing.major);
    }
  }, [editing]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editing) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editing.id
            ? { ...item, fullName, age: Number(age), email, major }
            : item
        )
      );
      setEditing(null);
    } else {
      const newStudent: IStudents = {
        id: Date.now(),
        fullName,
        age: Number(age),
        email,
        major,
      };
      setData((prev) => [...prev, newStudent]);
    }

    setFullname("");
    setAge("");
    setEmail("");
    setMajor("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-2xl my-12">
      <h2 className="text-2xl font-bold mb-4">
        {editing ? "Edit Student" : "Add New Student"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={fullName}
          placeholder="Enter your fullname"
          onChange={(e) => setFullname(e.target.value)}
          required
        />
        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          value={age}
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={major}
          placeholder="Enter your major"
          onChange={(e) => setMajor(e.target.value)}
          required
        />
        <div className="flex justify-between">
          <Link to={"/"}>
            <button className="w-[150px] bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-500">
              Go Home
            </button>
          </Link>
          <button
            type="submit"
            className="w-[300px] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            {editing ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(UserCreate);
