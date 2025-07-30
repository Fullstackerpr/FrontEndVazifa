import React from "react";
import logoo from '../../assets/logoo.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <img
            src={logoo}
            alt=""
            className="w-[200px] h-[100px] object-cover"
          />
          <h2 className="text-xl font-semibold">Modern Shoes</h2>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
