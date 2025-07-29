import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "../../components/ui/Skeleton";
import ErrorWid from "../../components/ui/ErrorWid";
import Popup from "../../components/ui/Popup";

const Food = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
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

      <div className="container mt-[80px] mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-10 cursor-pointer">
        {data.map((product) => (
          <div
            id="food"
            onClick={() => setSelectedProduct(product)}
            className="shadow-lg rounded-l-lg overflow-hidden"
            key={product.id}
          >
            <div>
              <img
                src={product.image}
                alt=""
                className="w-[250px] h-64 mx-auto pt-[40px] object-contain"
              />
            </div>
            <div className="ml-[40px] mt-[20px]">
              <strong className="text-[#944aff]">${product.price}</strong>
              <h4 className="text-white bg-amber-400 w-[150px] mt-[10px] pl-[15px] h-7 rounded-2xl">
                {product.category}
              </h4>
              <p className="truncate pt-[10px]">{product.description}</p>
              <p className="text-amber-400 pt-[5px] font-bold">
                ⭐ {product.rating?.rate}
              </p>
              <button className="bg-[#7000ff] mt-[10px] mb-[15px] text-white w-[150px] h-8 rounded-[5px] cursor-pointer">
                Savatga
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Popup isShow={true} onclose={() => setSelectedProduct(null)}>
          <div className="bg-white p-6 rounded-lg max-w-[900px] h-[500px] cursor-pointer flex items-center">
            <div className="ml-[40px]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-[900px] object-contain mb-4"
              />
            </div>
            <div className="ml-[90px]">
              <h2 className="text-xl font-bold">{selectedProduct.category}</h2>
              <p className="text-sm mt-2">{selectedProduct.description}</p>
              <p className="mt-2 text-lg font-bold">${selectedProduct.price}</p>
              <p className="font-bold pt-[10px] text-amber-500">
                ⭐ {selectedProduct.rating.rate}
              </p>
              <button
                onClick={() => setSelectedProduct(null)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};

export default Food;
