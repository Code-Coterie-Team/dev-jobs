import React, { useState } from "react";



const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
      setIsDarkMode(prev => !prev);
  };



  return (
    <div className="h-32 flex justify-between items-center  relative">
      <img className="w-full h-full border rounded-bl-full" src="src\assets\images\bg-pattern-header.svg"></img>
      <div className="flex justify-between  items-center absolute ">
        <span className=" text-[30px] font-bold m-10 ">devjobs</span>
           
      </div>
    </div>
  );


};

export default ThemeToggleButton;
