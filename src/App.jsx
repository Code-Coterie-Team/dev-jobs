import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Search from "../src/components/Btn";
import './index.css';
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
        <Btn />
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
        bgColor="bg-orange-600"
      />

      <Company
        Datasend="20h ago . Part Time"
        NameJob="Haskell and PureScript Dev"
        photoName="src\assets\images\coffeeroasters.svg"
        NameCompany="Bloger"
        Location="United States"
        bgColor="bg-blue-600"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src\assets\images\pomodoro.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src\assets\images\officelite.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src\assets\images\mastercraft.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src\assets\images\maker.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src\assets\images\crowdfund.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src\assets\images\creative.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src\assets\images\coffeeroasters.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src\assets\images\blogr.svg"
        NameCompany="Vector"
        Location="Russia"
      />

      <Company
        Datasend="1d ago . Part Time"
        NameJob="Midlevel Back End Enginner"
        photoName="src\assets\images\pod.svg"
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
   <>
  
    <div className="w-full sm:w-1/2 md:w-1/4  m-3 flex flex-col items-center border border-white rounded-lg bg-white p-5">
      <img
        src={props.photoName}
        className="w-[50px] h-[50px] bg-orange-600"
      />
      <span className="text-black">{props.Datasend}</span>
      <p className="text-black">{props.NameJob}</p>
      <span className="text-black">{props.NameCompany}</span>
      <p className="text-black">{props.Location}</p>
    </div>
   
    </>
  );
}

export default App;
