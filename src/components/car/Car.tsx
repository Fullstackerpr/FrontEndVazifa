import { memo, useState, type FormEvent } from "react";
import { useCar } from "../../api/hooks/useCar";

const Car = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [release_date, setDate] = useState("");
  const [power, setPower] = useState<number | string>("");

  const [edit, setEdit] = useState<any>(null);

  const { getCar, createCar, deleteCar, updateCar } = useCar();
  const { data } = getCar();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let car = {
      name,
      price: Number(price),
      brand,
      color,
      release_date,
      power: Number(power),
    };

    if (edit) {
      updateCar.mutate(
        { id: edit.id, data: car },
        {
          onSuccess: () => {
            setName("");
            setPrice("");
            setBrand("");
            setColor("");
            setDate("");
            setPower("");
          },
        }
      );
    } else {
      createCar.mutate(car, {
        onSuccess: () => {
          setName("");
          setPrice("");
          setBrand("");
          setColor("");
          setDate("");
          setPower("");
        },
      });
    }
  };

  const handleUpdate = (item: any) => {
    setName(item.name),
      setPrice(item.price),
      setBrand(item.brand),
      setColor(item.color),
      setDate(item.data),
      setPower(item.power);

    setEdit(item);
  };

  return (
    <div className="Car flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        🚗 Car Management
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 flex flex-col gap-4 w-full max-w-lg border border-gray-200"
      >
        <input
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-400 outline-none"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-400 outline-none"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-400 outline-none"
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-400 outline-none"
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-400 outline-none"
          type="date"
          value={release_date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="border border-gray-300 p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-400 outline-none"
          type="number"
          placeholder="Power"
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />

        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold p-3 rounded-xl hover:scale-[1.02] transform transition disabled:opacity-50 cursor-pointer"
          disabled={createCar.isPending}
        >
          {createCar.isPending ? "Loading..." : "Submit"}
        </button>
      </form>

      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {data?.data.map((item: any) => {
          const { id, name, price, brand, color, release_date, power } = item;
          return (
            <div
              key={id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transform transition border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                <p className="text-gray-600 mb-1">
                  💰{" "}
                  <span className="font-medium text-gray-800">{price} $</span>
                </p>
                <p className="text-gray-600 mb-1">🏷️ {brand}</p>
                <p className="text-gray-600 mb-1">🎨 {color}</p>
                <p className="text-gray-600 mb-1">📅 {release_date}</p>
                <p className="text-gray-600">⚡ {power} HP</p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => deleteCar.mutate(id)}
                    className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition active:scale-95 shadow-md"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(item)}
                    className="px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-medium hover:bg-yellow-500 transition active:scale-95 shadow-md"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Car);
