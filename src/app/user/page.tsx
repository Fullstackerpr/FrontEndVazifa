import { memo } from "react";

const User = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json()

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.users.map((item: any) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer bg-white"
        >
          <img
            src={item.image}
            alt={`${item.firstName} ${item.lastName}`}
            width={400}
            height={250}
            className="w-full h-[250px] object-contain rounded-t-3xl"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl text-gray-800">
              {item.firstName} {item.lastName}
            </h2>
            <p className="text-gray-600 text-sm">Phone: {item.phone}</p>
            <p className="text-gray-600 text-sm">Gender: {item.gender}</p>
            <p className="text-gray-600 text-sm">Age: {item.age}</p>
            <p className="mt-2 font-semibold text-yellow-600">
              Height: {item.height} cm
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(User);
