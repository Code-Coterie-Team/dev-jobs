import React, { useState } from "react";
import ToggleMode from "../../Hooks/Toggleapp";


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
           
     



     

  
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
            {isDarkMode ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLineJoin="round"
                        strokeWidth={2}
                        d="M12 3v1M12 20v1M4.22 4.22l.707.707M19.78 19.78l.707.707M1 12h1M22 12h1M4.22 19.78l.707-.707M19.78 4.22l.707.707"
                    />
                    <circle cx="12" cy="12" r="5" className="fill-yellow-400" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLineJoin="round"
                        strokeWidth={2}
                        d="M12 3v1M12 20v1M4.22 4.22l.707.707M19.78 19.78l.707.707M1 12h1M22 12h1M4.22 19.78l.707-.707M19.78 4.22l.707.707"
                    />
                    <path d="M12 4V2M12 22v-2M4 12H2m20 0h-2M4.22 19.78L3.51 17.46M19.78 4.22l-1.41-1.41" />
                    <circle cx="12" cy="12" r="5" className="fill-black-400" />
                </svg>

                
            )}
        </button>



           
      </div>
    </div>
  );


};

export default ThemeToggleButton;
