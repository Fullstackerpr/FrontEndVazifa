import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container bg-amber-200 pl-4 pr-4 rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center  h-[60px] gap-12 text-[16px] text-gray-800">
          <h3 className="flex-1 flex">
            <FaUser className="mr-2 mt-[3px]" /> User
          </h3>
          <NavLink
            className={({ isActive }) =>
              `text-base uppercase ${isActive ? "text-blue-800 underline" : ""}`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-base uppercase ${isActive ? "text-blue-800 underline" : ""}`
            }
            to={"/user"}
          >
            Users
          </NavLink>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
