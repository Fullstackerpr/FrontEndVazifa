import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const inc = () => {};

  return (
    <div id="login">
      <h1 className="mx-auto">Login</h1>
      <NavLink to={"/"}>
        <button className="bg-white text-gray-800 font-bold rounded-4xl px-4 mt-[15px] border w-[400px] h-[60px] text-[19px] cursor-pointer">
          Go Home
        </button>
      </NavLink>
      <button
        onClick={() => navigate(-1)}
        className="bg-white text-gray-800 font-bold rounded-4xl px-4 mt-[15px] border w-[400px] h-[60px] text-[19px] cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
};

export default Login;
