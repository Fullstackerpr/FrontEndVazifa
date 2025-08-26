import { memo } from "react";
import Image from "next/image";

type Recipe = {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
};

const Food = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.recipes.map((item: Recipe) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer bg-white"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={400}
            height={250}
            className="w-full h-64 object-contain rounded-t-3xl"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl text-gray-800">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.cuisine}</p>
            <p className="mt-2 font-semibold text-yellow-600">
              ⭐️ {item.rating}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Food);
