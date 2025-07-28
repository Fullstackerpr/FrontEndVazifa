import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "../ui/Popup";
import ErrorWid from "../ui/ErrorWid";
import Skeleton from "../ui/Skeleton";

const Hero = () => {
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

      <div className="container mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-10 mt-[80px]">
        {data.map((product) => (
          <div
            onClick={() => setSelectedProduct(product)}
            className="shadow-lg rounded-lg overflow-hidden cursor-pointer"
            key={product.id}
          >
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="h-64 object-contain bg-white w-[300px]"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold truncate pt-[10px]">{product.title}</h2>
              <p className="font-bold pt-[10px]">${product.price}</p>
              <p className="font-bold pt-[10px] text-amber-500">
                ⭐ {product.rating.rate}
              </p>
              <p className="truncate pt-[10px]">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Popup isShow={true} onclose={() => setSelectedProduct(null)}>
          <div className="bg-white p-6 rounded-lg max-w-[500px]">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-64 object-contain mb-4"
            />
            <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
            <p className="text-sm mt-2">{selectedProduct.description}</p>
            <p className="mt-2 text-lg font-bold">${selectedProduct.price}</p>
            <p className="font-bold pt-[10px] text-amber-500">
              ⭐ {selectedProduct.rating.rate}
            </p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Yopish
            </button>
          </div>
        </Popup>
      )}
    </>
  );
};

export default Hero;
