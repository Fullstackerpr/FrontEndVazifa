import React from "react";
import error from "../../assets/error.jpg"

const Error = ({ text = "❌ Error Bro Errorrrrrrr :[" }) => {
  return (
    <div>
      <img src={error} alt="" className="mx-auto"/>
      <h1 className="text-red-600 text-5xl text-center">{text}</h1>
    </div>
  );
};

export default Error;
