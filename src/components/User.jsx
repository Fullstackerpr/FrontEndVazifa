import useFetch from "../hooks/useFetch";
import { useGetValues } from "../hooks/useGetValues";
import { api } from "../api";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const initialState = {
  fname: "",
  lname: "",
  age: "",
  gender: "",
};

const User = () => {
  const { data } = useFetch("users");
  const [editingUser, setEditingUser] = useState(null);

  const { formData, handleChange, setFormData } = useGetValues(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.age = Number(formData.age);

    if (editingUser) {
      api.put(`users/${editingUser.id}`, formData);
    } else {
      api.post("users", formData);
    }
  };

  const handleUpdate = (user) => {
    setEditingUser(user);
    setFormData(user);
  };

  const handleDelete = (id) => {
    api.delete(`users/${id}`);
  };

  return (
    <div className="flex gap-12">
      <form
        onSubmit={handleSubmit}
        className="bg-emerald-500 rounded-2xl text-white w-[600px] h-[600px] ml-[40px] mt-[50px]"
      >
        <h1 className="text-3xl font-bold text-center pt-[50px]">
          Sign Up Form
        </h1>
        <div className="flex flex-col mt-[40px] mx-16 gap-6">
          <input
            className="h-[60px] rounded-2xl border-2 outline-none pl-[10px]"
            type="text"
            name="fname"
            id="fname"
            placeholder="Eneter your first name"
            value={formData.fname}
            onChange={handleChange}
          />
          <input
            className="h-[60px] rounded-2xl border-2 outline-none pl-[10px]"
            type="text"
            name="lname"
            id="lname"
            placeholder="Enter your last name"
            value={formData.lname}
            onChange={handleChange}
          />
          <input
            className="h-[60px] rounded-2xl border-2 outline-none pl-[10px]"
            type="number"
            name="age"
            id="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <select
          className="border-2 rounded-2xl w-[350px] h-[50px] pl-[20px] outline-0 ml-[65px] text-[19px] font-bold cursor-pointer mt-[30px]"
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select your gender
          </option>
          <option className="text-black bg-blue-200" value="male">
            Male
          </option>
          <option className="text-black bg-blue-200" value="female">
            Female
          </option>
        </select>
        <div className="mt-[30px] mx-16">
          <button className="border-2 w-full h-[50px] rounded-3xl font-bold text-[20px] cursor-pointer hover:bg-amber-50 hover:text-teal-600">
            {editingUser ? "Save" : "Submit"}
          </button>
        </div>
      </form>

      <div className="bg-white rounded-2xl shadow-lg p-6 mt-10 w-[700px]">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-700">
          Users
        </h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white text-left">
              <th className="py-3 px-4 rounded-tl-xl">#</th>
              <th className="py-3 px-4">First Name</th>
              <th className="py-3 px-4">Last Name</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Gender</th>
              <th className="py-3 px-4">Edit</th>
              <th className="py-3 px-4 rounded-tr-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr
                key={user.id}
                className={`hover:bg-emerald-50 transition-colors ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{user.fname}</td>
                <td className="py-2 px-4">{user.lname}</td>
                <td className="py-2 px-4">{user.age}</td>
                <td className="py-2 px-4 capitalize">{user.gender}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleUpdate(user)}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
