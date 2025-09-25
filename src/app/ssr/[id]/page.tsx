import { memo } from "react";

const SsrDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await fetch(
    `https://68ce8be66dc3f350777f4fb1.mockapi.io/users/${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative">
          <img
            src={data.img}
            alt={data.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-4">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
              {data.name}
            </h1>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <p className="text-gray-600 text-lg">
            <span className="font-medium text-gray-800">Davlat: </span>
            {data.state}
          </p>

          <p className="text-xl font-semibold text-blue-600">
            Aholi: {data.population} mln
          </p>

          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl shadow-md transition-colors duration-300">
            🌍 Sayohat qilish
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(SsrDetail);
