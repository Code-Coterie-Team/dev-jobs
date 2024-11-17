import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div>
        <Header />
        <Search />
      </div>
    </div>
  );
};

export default App;
