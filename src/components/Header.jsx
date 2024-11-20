import React from "react";
import mySvg from '../assets/images/sun.svg'; // مسیر صحیح
import patternSvg from '../assets/images/bg-pattern-header.svg'; // بارگیری تصویر به روش import
import halfmoon from '../assets/images/moon.svg'; // اصلاح نام فایل و پسوند
import chang from '../assets/images/menu.svg'; // اصلاح نام فایل و پسوند

const ThemeToggleButton = () => {
  return (
    <div className="h-32 flex justify-between items-center relative">
      <img className="w-full h-full border rounded-bl-full" src={patternSvg} alt="Background Pattern" />
      <div className="absolute left-0 right-0 flex justify-between items-center px-10">
        <span className="text-[30px] font-bold">devjobs</span>
        <div className="flex">
        <img src={mySvg} alt="Sun" className="h-5 w-5 filter brightness-0 invert" /> {/* تغییر رنگ به سفید */}
        <img src={chang} alt="Sun" className="h-5 w-5 filter brightness-0 invert" /> 
        <img src={halfmoon} alt="Moon" className="h-5 w-5 filter brightness-0 invert" /> {/* اضافه کردن کلاس اندازه به تصویر ماه */}
        </div>
      </div>
    </div>
  );
}

export default ThemeToggleButton;