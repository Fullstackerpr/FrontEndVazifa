import Link from "next/link";
import { memo } from "react";

type Product = {
  id: string;
  name: string;
  state: string;
  population: number;
  img: string;
};

const IsrPage = async () => {
  const res = await fetch(
    "https://68ce8be66dc3f350777f4fb1.mockapi.io/products",
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🌍 Davlatlar ro‘yxati</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item: Product) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <Link href={`/isr/${item.id}`}>
              <img
                src={item.img}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
            </Link>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-gray-500">{item.state}</p>
              <p className="text-blue-600 font-bold mt-2">
                {item.population} mln
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(IsrPage);
