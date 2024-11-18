import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center -translate-y-1/2">
      <div className="bg-white text-red-400 flex justify-center items-center gap-24  flex-row  w-[80%] mx-[10%] h-14 rounded-md border-none	">
        <input
          type="text"
          placeholder="Filter by title,companies,..."
          className="w-full h-[100%] rounded-md m-5 border-none outline-none"
          
        />

<select>
<option >Other option</option>
  <option >Some option</option>
  
</select>
        

        <button>Search</button>
        


      </div>
    </div>
  );
};

export default Search;
