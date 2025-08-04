import React from "react";

const Popup = ({ children, isShow, onClose }) => {
  if (!isShow) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-screen inset-0 backdrop-blur-sm bg-white/30 z-40"
      ></div>
      <div className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>
  );
};

export default Popup;
