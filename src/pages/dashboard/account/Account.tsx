import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <nav className="flex items-center h-[60px] justify-around text-[18px] font-bold mt-[10px] border-2 border-b-blue-600 rounded-2xl">
        <NavLink
          end={true}
          to={""}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 border-blue-700 pb-1"
              : "hover:text-blue-600 transition"
          }
        >
          Create Account
        </NavLink>
        <NavLink
          to={"view"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 border-blue-700 pb-1"
              : "hover:text-blue-600 transition"
          }
        >
          View Account
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(Account);
