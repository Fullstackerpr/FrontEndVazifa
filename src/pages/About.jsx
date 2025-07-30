import React, { useState } from "react";

const About = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: !data.length ? 0 : data.length + 1,
      title,
      desc,
    };

    setData((prev) => [...prev, newUser]);
    setTitle("");
    setDesc("");
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl font-bold my-4">Create content</h2>
      <form onSubmit={handleSubmit} action="" className="flex gap-4">
        <input
          type="text"
          className="border py-2 px-4 border-gray-200 rounded-xl"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="border py-2 px-4 border-gray-200 rounded-xl"
          placeholder="desciption"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          className="border py-2 px-4 border-gray-200 rounded-xl"
        >
          Submit
        </button>
      </form>
      <h2 className="text-2xl font-bold my-4">All content</h2>

      <div className="grid grid-cols-5 gap-3">
        {data.map((item) => (
          <div key={item.id} className="p-4 border border-gray-200 rounded-xl">
            <h3 className="font-bold text-xl ">{item.title}</h3>
            <p className="my-3">{item.desc}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 cursor-pointer"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(About);
