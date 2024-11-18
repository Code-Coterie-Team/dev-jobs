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
    <div className="bg-[#F2F2F2]">
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
    <div className="flex justify-around">
      <Company
        name="Vegetarian Pizza"
        photoName="src\assets\images\scoot.svg"
        price="10$"
      />

      <Company
        name="Italian Pizza"
        photoName="src\assets\images\pomodoro.svg"
        price="15$"
      />

      <Company
        name="Italian Pizza"
        photoName="src\assets\images\pomodoro.svg"
        price="15$"
      />

      <Company
        name="Italian Pizza"
        photoName="src\assets\images\pomodoro.svg"
        price="15$"
      />
    </div>
  );
}

function Company(props) {
  return (
    <div>
      <h2>{props.Name}</h2>
      <img
        src={props.photoName}
        alt={props.Name}
        className="w-[50px] h-[50px] bg-red-600 flex-wrap"
      />
      <p>Price: {props.price}</p>
    </div>
  );
}

export default App;
