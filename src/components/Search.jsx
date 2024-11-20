import React from "react";
import search from "../assets/images/searchN.svg"; // اصلاح نام فایل و پسوند

const Search = () => {
  return (
    <div className="flex justify-center -translate-y-1/2 flex-row">
      <div className="bg-white text-red-400 flex justify-center items-center gap-24 flex-row w-[80%] mx-[10%] h-14 rounded-md border-none">
        <div className="flex justify-between items-center basis-1/2 m-2 p-2 border-r-2 border-[#E2E6EA]">
          <img 
            src={search} 
            alt="Menu" 
            className="h-8 w-9 filter hue-rotate-190" /> {/* تغییر رنگ به آبی */}
          
          <input 
            type="text" 
            placeholder="Filter by title, companies,..."
            className="w-full h-[100%] rounded-md m-5 border-none outline-none" 
          />
        </div>

        <select className="basis-1/4 border-r-2 border-[#E2E6EA]">
          <option>Other option</option>
          <option>Some option</option>
        </select>

        <button className="basis-1/4">Search</button>
      </div>
    </div>
  );
};

export default Search;