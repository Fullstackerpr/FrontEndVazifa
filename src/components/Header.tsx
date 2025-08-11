import logoo from "../assets/logoo.svg";
import catalog from "../assets/catalog.svg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import heart from "../assets/heart.svg";
import basket from "../assets/basket.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-[18px]">
      <div className="container flex items-center justify-between ">
        <div>
          <img src={logoo} alt="" className="w-[215px] h-[32px]" />
        </div>
        <div className="flex gap-[4px] justify-center items-center w-[120px] h-[40px] rounded-[4px] bg-[#F0F0FF]">
          <img src={catalog} alt="" className="" />
          <p className="text-[14px] font-medium text-[#7000FF]">Katalog</p>
        </div>
        <div className="w-[552px] h-[40px] border border-[#d7d7d9] flex items-center justify-between rounded-[4px]">
          <div className="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Mahsulotlar va turkumlar izlash"
              className="w-[222px] border-0 outline-0 text-[14px] font-normal ml-[16px]"
            />
          </div>
          <div className="w-[78px] h-[38px] bg-[#F2F4F7] flex items-center justify-center">
            <img src={search} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={user} alt="" />
          <NavLink to={"/"}>
            <p className="font-medium text-[14px]">Kirish</p>
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={heart} alt="" />
          <NavLink to={"/like"}>
            <p className="font-medium text-[14px]">Saralangan</p>
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={basket} alt="" />
          <p className="font-medium text-[14px]">Savat</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
