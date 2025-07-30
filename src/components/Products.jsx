import React from "react";

const Products = ({data}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Products</h2>
      <div className="grid grid-cols-4 gap-3">
        {data?.map((datas) => (
          <div key={datas.id}>
            <div className="border border-gray-200 p-4 shadow-lg rounded-lg">
              <div className="h-[300px]">
                <img
                  className="h-full w-full object-contain"
                  src={datas.image}
                  alt=""
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{datas.title}</h3>
                <strong>{datas.price}</strong>
              </div>
            </div>
            <div className="border border-gray-200 p-4 shadow-lg rounded-lg">
              <div className="h-[300px]">
                <img
                  className="h-full w-full object-contain"
                  src={datas.image}
                  alt=""
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{datas.title}</h3>
                <strong>{datas.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Products);
