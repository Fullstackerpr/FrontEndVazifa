import React from "react";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600 flex">
            <FaTelegramPlane className="text-blue-500 text-2xl mx-2" />
            Telegram Dashboard
          </div>

          <nav className="flex gap-6 text-gray-700 font-medium mr-[150px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                  : "hover:text-blue-600 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                  : "hover:text-blue-600 transition"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                  : "hover:text-blue-600 transition"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                  : "hover:text-blue-600 transition"
              }
            >
              Dashboard
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
