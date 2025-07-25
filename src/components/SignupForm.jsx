import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuidv4(),
      fullName,
      email,
      password,
      birthDate,
      gender,
    };
    setData((prev) => [...prev, newUser]);
    setFullName("");
    setEmail("");
    setPassword("");
    setBirthDate("");
    setGender("");
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="bg-teal-800 w-full h-[100%] min-h-screen flex">
      <div className="flex gap-6 mt-[50px] ml-[50px]">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-[500px] h-[700px] p-12 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Signup Form</h2>

          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your full name"
            className="block w-full border p-2 mb-4"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="block w-full border p-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="block w-full border p-2 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            className="block w-full border p-2 mb-4"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />

          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            className="block w-full border p-2 mb-6"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button
            type="submit"
            className="bg-teal-800 text-white w-full py-2 rounded hover:bg-teal-600 transition duration-200 hover:scale-105 shadow-md cursor-pointer"
          >
            Submit
          </button>
        </form>

        <div className="bg-white w-[1000px] rounded-lg shadow-lg p-4">
          <table className="w-full border-collapse table-auto">
            <thead className="bg-teal-600 text-white text-left">
              <tr>
                <th className="p-3 border">#</th>
                <th className="p-3 border">Full Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Password</th>
                <th className="p-3 border">Birth Date</th>
                <th className="p-3 border">Gender</th>
                <th className="p-3 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{item.fullName}</td>
                  <td className="p-2 border">{item.email}</td>
                  <td className="p-2 border">{item.password}</td>
                  <td className="p-2 border">{item.birthDate}</td>
                  <td className="p-2 border">{item.gender}</td>
                  <td className="p-2 border text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
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
      </div>
    </section>
  );
};

export default SignupForm;
