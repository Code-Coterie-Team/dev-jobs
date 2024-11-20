import React from "react";
import search from "../assets/images/searchN.svg"; // اصلاح نام فایل و پسوند
import location from "../assets/images/location.svg";

const Search = () => {
  return (
    <div className="flex justify-center -translate-y-1/2 flex-row">
      <div className="bg-white text-gray-600 flex justify-center items-center gap-24 flex-row w-[80%] mx-[10%] h-14 rounded-md border-none">
        <div className="flex justify-between items-center basis-1/2 m-2 p-2 border-r-2 border-[#E2E6EA]">
          <img
            src={search}
            alt="Menu"
            className="h-8 w-9 filter hue-rotate-190" // تغییر رنگ به آبی
          />{" "}
          <input
            type="text"
            placeholder="Filter by title, companies,..."
            className="w-full h-[100%] rounded-md m-5 border-none outline-none text-gray-600" // تغییر رنگ متن در ورودی
          />
        </div>

        <div className="flex justify-around items-center">
          <img src={location} alt="location" className="h-8 w-9" />
          <select className="basis-1/4 border-r-2 border-[#E2E6EA] text-gray-600">
            {" "}
            {/* تغییر رنگ متن در انتخاب */}
            <option>Filter By Location</option>
            <option>Germany</option>
            <option>Japan</option>
            <option>Russia</option>
            <option>Singapore</option>
            <option>United Kingdom</option>
            <option>United States</option>
          </select>
        </div>

        <div class="flex">
          <div class="flex items-center justify-between">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
          <div class="ms-8 text-sm">
            <label for="helper-checkbox" class="font-bold text-gray-900 flex">
              Full Time Only
            </label>
          </div>

          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Serach
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
