import { NavLink } from "react-router-dom";
import logoo from "../../assets/logoo.svg";

const Header = () => {
  return (
    <header>
      <div className="container h-[100px] overflow-hidden flex justify-between border-2 border-amber-600 rounded-2xl px-6">
        <div>
          <img
            src={logoo}
            alt=""
            className="w-[200px] h-[100px] object-cover"
          />
        </div>
        <div className="flex items-center gap-12 text-[21px] text-gray-800">
          <NavLink to={"/"} className={({isActive}) => `text-base uppercase ${isActive ? "text-blue-800 underline" : ""}`}>
            Home
          </NavLink>
          <NavLink to={"/post"} className={({isActive}) => `text-base uppercase ${isActive ? "text-blue-800 underline" : ""}`}>
            Post
          </NavLink>
          <NavLink to={"/todos"} className={({isActive}) => `text-base uppercase ${isActive ? "text-blue-800 underline" : ""}`}>
            Todos
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
