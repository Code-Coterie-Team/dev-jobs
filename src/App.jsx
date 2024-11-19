import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";

const pizzaData = [
  {
    Name: "Pizza 1",
    price: 60,
  },
  {
    Name: "Pizza 2",
    price: 70,
  },
  {
    Name: "Pepperoni Pizza",
    price: 80,
  },
  {
    Name: "Margherita Pizza",
    price: 65,
  },
  {
    Name: "BBQ Chicken Pizza",
    price: 90,
  },
  {
    Name: "Hawaiian Pizza",
    price: 85,
  },
  {
    Name: "Vegetarian Pizza",
    price: 75,
  },
  {
    Name: "Meat Lover's Pizza",
    price: 95,
  },
  {
    Name: "Seafood Pizza",
    price: 100,
  },
  {
    Name: "Four Cheese Pizza",
    price: 80,
  },
];

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Search />
        <Menu />
      </div>
    </div>
  );
};

function Menu() {
  return (
    <div className="flex justify-center flex-wrap">
      <Company
        Datasend="5h ago . Full Time"
        NameJob="Senior Software Engineer"
        photoName="src/assets/images/scoot.svg"
        NameCompany="Scoot"
        Location="United Kingdom"
      />

      <Company
        Datasend="20h ago . Part Time"
        NameJob="Haskell and PureScript Dev"
        photoName="src/assets/images/scoot.svg"
        NameCompany="Bloger"
        Location="United States"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src/assets/images/scoot.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src/assets/images/scoot.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src/assets/images/scoot.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src/assets/images/scoot.svg"
        NameCompany="Vector"
        Location="Russia"
      />
    </div>
  );
}

function Company(props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 flex flex-col items-center border border-white rounded-lg bg-gray-800">
      <img
        src={props.photoName}
        className="w-[50px] h-[50px] bg-orange-600 rounded-lg"
      />
      <span className="text-white">{props.Datasend}</span>
      <p className="text-white">{props.NameJob}</p>
      <span className="text-white">{props.NameCompany}</span>
      <p className="text-white">{props.Location}</p>
    </div>
  );
}

export default App;
