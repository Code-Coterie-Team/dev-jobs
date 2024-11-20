import React from "react";
import mySvg from '../assets/images/sun.svg'; // مسیر صحیح
import patternSvg from '../assets/images/bg-pattern-header.svg'; // بارگیری تصویر به روش import

const ThemeToggleButton = () => {
  return (
    <div className="h-32 flex justify-between items-center relative">
      <img className="w-full h-full border rounded-bl-full" src={patternSvg} alt="Background Pattern" />
      <div className="absolute left-0 right-0 flex justify-between items-center px-10"> {/* اضافه کردن padding به صورت کناری */}
        <span className="text-[30px] font-bold">devjobs</span>
        <img src={mySvg} alt="Sun" className="h-8 w-8" /> {/* می‌توانید اندازه تصویر را با کلاس‌های Tailwind تنظیم کنید */}
      </div>
    </div>
  );
}

export default ThemeToggleButton;