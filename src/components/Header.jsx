import React, { useState } from "react";
import ToggleMode from "../../Hooks/Toggleapp";

const Header = () => {
  const[colorTheme,setTheme] = ToggleMode();
  const [darkSide,setDarkSide] = useState(colorTheme === 'light' ? true : false);
  
  
  return (
    <div className="h-32 flex justify-between items-center  relative">
      <img className="w-full h-full border rounded-bl-full" src="src\assets\images\bg-pattern-header.svg"></img>
      <div className="flex justify-between  items-center absolute ">
        <span className=" text-[30px] font-bold m-10 ">devjobs</span>
        <p className="font-bold m-10 ">light and dark mode</p>
      </div>
    </div>
  );
};

export default Header;