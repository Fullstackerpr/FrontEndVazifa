import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import { FaUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";

const index = () => {
  return (
    <div>
      <div className="dashboard flex">
        <div className="">
          <div className="bg-gray-900 w-[300px] h-[100vh] text-white shadow-md shadow-gray-600 p-6">
            <div>
              <div className="">
                <img
                  className="w-[80px] h-[80px] rounded-[50%] object-cover"
                  src={profile}
                  alt=""
                />
              </div>
              <h1 className="font-bold text-[20px] pl-1 pt-1">Laylo</h1>
            </div>
            <ul className="pt-6">
              <hr className="w-full text-black" />
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"account"}
                >
                  <FaUserPlus className="text-blue-500 text-2xl" />
                  Ceate New Account
                </NavLink>
              </li>
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md  ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"profile"}
                >
                  <FaUserCircle className="text-gray-500 text-2xl" />
                  My Profile
                </NavLink>
              </li>
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md  ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"wallet"}
                >
                  <FaWallet className="text-gray-500 text-[20px]" />
                  Wallet
                </NavLink>
              </li>
              <hr className="w-full text-black mt-5" />
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md  ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"group"}
                >
                  <MdGroups className="text-gray-500 text-3xl" />
                  New Group
                </NavLink>
              </li>
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md  ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"channel"}
                >
                  <MdCampaign className="text-gay-500 text-3xl" />
                  New Channel
                </NavLink>
              </li>
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md  ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"contact"}
                >
                  <BsPersonLinesFill className="text-gray-500 text-2xl" />
                  Contacts
                </NavLink>
              </li>
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md  ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"call"}
                >
                  <FiPhone className="text-gary-500 text-2xl" />
                  Calls
                </NavLink>
              </li>
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md  ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"message"}
                >
                  <FaSave className="text-gray-500 text-2xl" />
                  Saved Messages
                </NavLink>
              </li>
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md  ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"setting"}
                >
                  <FiSettings className="text-gray-500 text-2xl" />
                  Settings
                </NavLink>
              </li>
              <li className={"lis"}>
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 rounded-md  ${
                      isActive
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                  to={"mode"}
                >
                  <FiMoon className="text-gray-500 text-2xl" />
                  Night Mode
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex w-[150px] h-[40px] bg-gray-400 text-gray-900 rounded-2xl mt-4"
                  to={"/"}
                >
                  <FaArrowLeft className="text-[20px] mt-2 ml-4" />
                  <button className="ml-2 cursor-pointer">Go Home</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className="dashboard-header w-full h-[60px]">
            <div className="w-full h-[60px] items-center pl-[20px] text-xl font-bold text-blue-600 flex shadow-md shadow-cyan-400">
              <FaTelegramPlane className="text-blue-500 text-2xl mx-2" />
              Telegram Dashboard
            </div>
          </div>
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(index);
