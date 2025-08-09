import { FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import bg from "../../assets/bg.jpg";
import { Link } from "react-router-dom";
import React from "react";

const Login = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-cover bg-center h-screen grid place-items-center"
      >
        <div
          id="login"
          className="w-[550px] h-[600px] mx-auto mt-[50px] text-white rounded-4xl shadow-lg bg-gray/80 backdrop-blur-md"
        >
          <form action="" className="flex flex-col gap-4 items-center">
            <h1 className="text-[26px] font-bold pt-[40px]">Sign In</h1>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center rounded-4xl px-4 mt-[30px] border w-[400px] h-[60px]">
                <input
                  className="outline-none"
                  type="username"
                  name=""
                  id=""
                  placeholder="Enter your username"
                />
                <FaUser className="text-white text-xl" />
              </div>
              <div className="flex justify-between items-center rounded-4xl px-4 mt-[15px] border w-[400px] h-[60px]">
                <input
                  className="outline-none"
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter your password"
                />
                <FaEye className="text-white text-xl" />
              </div>
              <div className="flex justify-between pt-[15px]">
                <label htmlFor="">
                  <input type="checkbox" className="cursor-pointer" />
                  Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <Link to={'/dashboard'}>
                <button className="bg-white text-gray-800 font-bold rounded-4xl px-4 mt-[15px] border w-[400px] h-[60px] text-[19px] cursor-pointer hover:bg-gray-500 hover:text-white hover:border-none">
                  Sign In
                </button>
              </Link>
              <p className="pt-[10px] mx-auto">
                Don't have a account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default React.memo(Login);