import { Link } from "react-router-dom";
import logoo from "../../assets/logoo.svg";

const Header = () => {
  return (
    <header>
      <div className="container h-[100px] overflow-hidden flex justify-between">
        <div>
          <img
            src={logoo}
            alt=""
            className="w-[200px] h-[100px] object-cover"
          />
        </div>
        <div className="flex items-center gap-12 text-[21px] text-gray-800">
          <Link to={"/"} className="hover:text-blue-800 hover:underline">
            Home
          </Link>
          <Link to={"/food"} className="hover:text-blue-800 hover:underline">
            Food
          </Link>
          <Link to={"/user"} className="hover:text-blue-800 hover:underline">
            User
          </Link>
        </div>
        <div>
          <Link to={'/login'}>
            <button className="border-2 border-gray-700 mt-[20px] px-[40px] py-[15px] rounded-3xl font-bold text-gray-700 cursor-pointer hover:border-none hover:bg-gray-500 hover:text-white">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
