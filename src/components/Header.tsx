import { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-200 shadow-md">
      <div className="flex justify-center items-center gap-44 h-[60px] text-2xl font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent"
              : "text-gray-800 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition"
          }
        >
          Create
        </NavLink>

        <NavLink
          to="/view"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent"
              : "text-gray-800 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition"
          }
        >
          View
        </NavLink>
      </div>
    </div>
  );
};

export default memo(Header);
