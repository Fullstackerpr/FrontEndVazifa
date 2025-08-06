import axios from "axios";
import { useEffect, useState } from "react";

interface IUser {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Hero = () => {
  const [data, setData] = useState<null | IUser[]>(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products));
  }, []);

  return (
    <div>
      <h1 className="text-center mt-[60px] text-2xl font-bold">Products</h1>
      <div className="mt-[20px]">
        <div className="container gap-6 grid grid-cols-4">
          {data?.map((product: IUser) => (
            <div key={product.id} className="bg-gray-200 px-4 py-2 rounded-2xl">
              <img src={product.thumbnail} width={300} alt="" />
              <h3>{product.title}</h3>
              <strong>{product.price}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
