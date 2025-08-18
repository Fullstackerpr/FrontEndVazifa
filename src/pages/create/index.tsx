import React, { memo, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../api/hooks";

const initialState = {
  full_name: "",
  email: "",
  password: "",
  username: "",
  phone_number: "",
  confirm_pass: "",
  gender: "" as "male" | "female" | "",
};

const Create = () => {
  const [form, setForm] = useState(initialState);

  const { createUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { ...form };
    console.log("Submit user:", user);

    createUser.mutate(user, {
      onSuccess: () => {
        setForm(initialState);
        navigate("/view");
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white rounded-xl shadow-lg w-[700px] p-10">
        <h1 className="text-3xl font-bold mask-linear-from-neutral-300">
          Registration
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-6 mt-11">
            <div className="flex flex-col w-1/2 gap-4">
              <div>
                <label className="block text-[20px] font-medium text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Enter your name"
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
                  value={form.full_name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-[20px] font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-[20px] font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col w-1/2 gap-4">
              <div>
                <label className="block text-[20px] font-medium text-black">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-[20px] font-medium text-black">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Enter your number"
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
                  value={form.phone_number}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-[20px] font-medium text-black">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_pass"
                  placeholder="Confirm your password"
                  className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
                  value={form.confirm_pass}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-[20px] font-medium text-black mb-2">
              Gender
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-black text-[18px]">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="accent-purple-500"
                  checked={form.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label className="flex items-center gap-2 text-black text-[18px]">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="accent-purple-500"
                  checked={form.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 rounded-md font-semibold text-lg shadow-md hover:opacity-90 cursor-pointer transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(Create);
