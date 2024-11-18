import React from "react";
// import svgimage from 'src\assets\images\bg-pattern-header.svg'

const Header = () => {
  return (
    
    
      <div className=" relative bg-[url('src\assets\images\bg-pattern-header.svg')]">
         
      
      <div>
        <span className="text-white text-[30px] font-bold m-10 ">devjobs</span>
      </div>
      <div>
        <p className="font-bold m-10 ">light and dark mode</p>
      </div>
      </div>
  );
};

export default Header;


{/* <div
className="h-32 flex justify-between items-center rounded-bl-[90px]"
style={{ backgroundImage: `url(${svgimage})`}}
> */}