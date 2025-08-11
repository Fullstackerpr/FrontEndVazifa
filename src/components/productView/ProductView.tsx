import React, { type FC } from "react";
import type { IProduct } from "../../types";
import heart from "../../assets/heart.svg";
import { CreditCard } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { toggleWishes } from "../../lib/features/wishlistSlice";
import { useDispatch } from "react-redux";

interface HomeProps {
  data: IProduct[] | null;
}

const ProductView: FC<HomeProps> = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="mt-[48px] font-bold text-[28px]">
        Arzon Narxlar <span>&#10095;</span>
      </h2>
      <div className="grid grid-cols-5 mt-[21px] gap-[20px]">
        {data?.map((product: IProduct) => (
          <div key={product.id} className="text-[#1F2026] mt-[20px]">
            <div className="w-[232px] h-[309px] bg-[#efefef] rounded-[8px] relative flex justify-center items-center">
              <button
                onClick={() => dispatch(toggleWishes(product))}
                className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-[50%] absolute left-[180px] top-3 cursor-pointer"
              >
                <img src={heart} alt="" className="" />
              </button>

              <img src={product.thumbnail} width={300} alt="" />
              <p className="w-[51px] h-[21px] pl-[5px] font-medium text-[13px] bg-[#7000ff] rounded-[4px] text-white absolute bottom-[10px] left-[10px]">
                Aksiya
              </p>
            </div>
            <div className="mt-[12px]">
              <strong className="text-[#7000ff] flex gap-2 items-center pt-1  ">
                {product.price}{" "}
                <CreditCard size={18} color="#fff" fill="#7f4dff" />
              </strong>
              <p className="text-gray-600 pt-1">
                {(
                  product.price -
                  (product.price * (product.discountPercentage ?? 0)) / 100
                ).toLocaleString("uz-UZ")}
              </p>
              <h3 className="font-bold truncate pt-1">{product.title}</h3>
              <p className="truncate pt-1">{product.description}</p>
              <div className="mt-1 flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span className="text-[13px] text-gray-600">
                  4.9 (350 sharhlar)
                </span>
              </div>
              <button className="w-full bg-[#7000ff] p-1 rounded-[8px] text-white mt-2 cursor-pointer hover:bg-[#893cee]">
                Savatga
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductView);
