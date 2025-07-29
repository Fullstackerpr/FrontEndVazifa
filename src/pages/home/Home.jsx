import hero from "../../assets/hero.png";
import logoo from "../../assets/logoo.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "../../components/ui/Skeleton";
import ErrorWid from "../../components/ui/ErrorWid";
import Popup from "../../components/ui/Popup";

const Home = () => {
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Skeleton count={12} />;

  return (
    <>
      {error && <ErrorWid />}

      <section>
        <div id="home" className="container flex mt-[170px]">
          <div>
            <h1 className="w-[750px] text-8xl font-bold text-gray-800">
              Modern Shoes Market
            </h1>
            <h4 className="text-gray-800 text-3xl pt-[50px]">
              Create your image of a trendy foot fetishist.
            </h4>
            <p className="text-gray-800 pt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              ea animi asperiores <br /> ducimus similique pariatur libero
              officiis iure in consequatur!
            </p>
            <button className="bg-gray-600 mt-[50px] px-[40px] py-[15px] rounded-3xl font-bold text-white cursor-pointer hover:border-none hover:bg-gray-500 hover:text-white">
              See More
            </button>
          </div>
          <div>
            <img
              src={hero}
              alt=""
              className="size-[650px] object-cover mt-[-130px] ml-[40px]"
            />
          </div>
        </div>
      </section>

      <main>
        <div className="container my-12">
          <div className="grid grid-cols-3 gap-6">
            {data.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedShoe(product)}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4">
                  <strong className="text-[#944aff] text-xl">
                    👟 {product.title}
                  </strong>
                  <h4 className="text-gray-700 mt-1">💲 {product.price} USD</h4>
                  <p className="truncate pt-[10px] text-sm text-gray-600">
                    {product.description}
                  </p>
                  <p className="text-amber-500 pt-[5px] font-bold">
                    ⭐ {product.rating}
                  </p>
                  <button className="bg-[#7000ff] mt-[10px] text-white w-full h-8 rounded-[5px] cursor-pointer">
                    Batafsil
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selectedShoe && (
            <Popup isShow={true} onclose={() => setSelectedShoe(null)}>
              <div className="bg-white p-6 rounded-lg max-w-[900px] h-[500px] cursor-pointer flex items-center">
                <div className="ml-[40px]">
                  <img
                    src={selectedShoe.thumbnail}
                    alt={selectedShoe.title}
                    className="w-[400px] object-contain mb-4 rounded-lg"
                  />
                </div>
                <div className="ml-[40px]">
                  <h2 className="text-2xl font-bold">{selectedShoe.title}</h2>
                  <p className="text-sm mt-2 max-w-[400px]">
                    {selectedShoe.description}
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    💲 {selectedShoe.price} USD
                  </p>
                  <p className="font-bold pt-[10px] text-amber-500">
                    ⭐ {selectedShoe.rating}
                  </p>
                  <button
                    onClick={() => setSelectedShoe(null)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
                  >
                    Yopish
                  </button>
                </div>
              </div>
            </Popup>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <img
            src={logoo}
            alt=""
            className="w-[200px] h-[100px] object-cover"
          />
            <h2 className="text-xl font-semibold">Modern Shoes</h2>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
