import React from "react";

const Header = () => {
  return (
    <div className="h-32 flex justify-between items-center rounded-bl-[90px] bg-slate-900 relative">
      <img className="w-full h-full border" src="src\assets\images\bg-pattern-header.svg"></img>
      <div className="flex justify-between  items-center absolute ">
        <span className="text-white text-[30px] font-bold m-10 ">devjobs</span>
        <p className="font-bold m-10 ">light and dark mode</p>
      </div>
    </div>
  );
};

export default Header;