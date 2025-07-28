import React, { useState } from "react";
import logoo from "../../assets/logo.svg";
import hero from "../../assets/hero.png";
import Popup from "../ui/Popup";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <header className="">
      <div className="container">
        <div className="h-[25px] mt-[40px] flex justify-between">
          <img src={logoo} alt="" className="w-[65px] h-[26px]" />
          <ul className="flex text-[17px] items-center gap-6">
            <li>
              <span>
                <a href="#" onClick={handleShow}>
                  SIGN IN
                </a>
              </span>
            </li>
            <li>
              <span>
                <a href="#">INFO</a>
              </span>
            </li>
          </ul>
        </div>

        <Popup isShow={show} onClose={handleClose}>
          <div className="w-[450px] h-[400px] rounded-[10px] shadow-2xl bg-white p-4">
            <h1 className="text-[36px] font-[600] text-center pt-[10px]">
              Sign In
            </h1>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[50px] rounded-[5px] border-[2px] pl-[15px] border-blue-400 mt-[20px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[50px] rounded-[5px] border-[2px] pl-[15px] border-blue-400 mt-[20px]"
            />
            <button className="w-full h-[50px] rounded-[5px] text-[20px] mt-[20px] bg-blue-500 text-white hover:bg-blue-400 cursor-pointer">
              Sign In
            </button>
            <div className="text-center mt-[20px]">
              <a href="#">or Sign Up?</a>
            </div>
          </div>
        </Popup>

        <div className="mt-[40px]">
          <img src={hero} alt="" className="w-[1320px] h-[806px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
