import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center gap-8 font-bold text-[20px] mt-10">
      <NavLink className={({isActive}) => isActive ? "p-2 rounded-[5px] bg-blue-700 text-white" : "hover:text-blue-600 transition"} to={"/"}>Create</NavLink>
      <NavLink className={({isActive}) => isActive ? "p-2 rounded-[5px] bg-blue-700 text-white" : "hover:text-blue-600 transition"} to={"/view"}>View</NavLink>
    </div>
  );
};

export default Header;
