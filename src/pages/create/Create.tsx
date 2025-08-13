import axios from "axios";
import { memo, useEffect, useState, type FormEvent } from "react";

const BASE_URL = "https://689c992758a27b18087ec8ee.mockapi.io";

const Create = () => {
  const [data, setData] = useState<any>(null);
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [reload, setReload] = useState(true);
  const [update, setUpdate] = useState<any>(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/student`).then((res) => setData(res.data));
  }, [reload]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { name, birthdate, address, email };
    if (update) {
      axios.put(`${BASE_URL}/student/${update.id}`, body).then(() => {
        setReload((p) => !p);
        setUpdate(null);
        setName("");
        setBirthdate("");
        setAddress("");
        setEmail("");
      });
    } else {
      axios.post(`${BASE_URL}/student`, body).then(() => {
        setReload((p) => !p);
        setName("");
        setBirthdate("");
        setAddress("");
        setEmail("");
      });
    }
  };

  const handleDelete = (id: string) => {
    axios.delete(`${BASE_URL}/student/${id}`).then(() => {
      setReload((p) => !p);
    });
  };

  const handleUpdate = (item: any) => {
    setName(item.name);
    setBirthdate(item.birthdate);
    setAddress(item.address);
    setEmail(item.email);
    setUpdate(item);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-[600px] shadow-2xl rounded-[15px] py-10 px-6 bg-white">
        <div className="max-w-[450px] w-full mx-auto">
          <h2 className="font-bold text-[22px] text-blue-700 pt-6 text-center">
            Create Student
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-10">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="h-[40px] px-3 outline-none shadow-inner shadow-zinc-600/50 rounded-md"
            />
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="h-[40px] px-3 outline-none shadow-inner shadow-zinc-600/50 rounded-md"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="h-[40px] px-3 outline-none shadow-inner shadow-zinc-600/50 rounded-md"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-[40px] px-3 outline-none shadow-inner shadow-zinc-600/50 rounded-md"
            />
            <button className="bg-blue-700 font-bold text-[18px] h-[40px] border-0 text-white rounded-md cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-4">
        {data?.map((item: any) => (
          <div
            key={item.id}
            className="w-[300px] bg-gray-600 text-white p-3 rounded-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[150px] object-cover rounded-md"
            />
            <h3 className="mt-2 font-semibold">{item.name}</h3>
            <p>{item.birthdate}</p>
            <p>{item.address}</p>
            <p>{item.email}</p>
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => handleUpdate(item)}
                className="p-2 bg-gray-400 text-amber-400 font-bold rounded-[10px] cursor-pointer"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 bg-gray-400 text-red-600 font-bold rounded-[10px] cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Create);
