import React from "react";


// داده های نمونه شما
const drugs = [
  { id: 1, name: ' Scoot ',},
  { id: 2, name: ' Blogr',},
  { id: 3, name: ' Vector',},
 
];

// کامپوننت کارت دارو
const DrugCard = ({ drug }) => {
  return (
    <div className="drug-card">
      <img src={drug.image} alt={drug.name} />
      <h2>{drug.name}</h2>
    </div>
  );
};

// کامپوننت اصلی
const DrugList = () => {
  return (
    <div className="drug-list">
      {drugs.map(drug => (
        <DrugCard key={drug.id} drug={drug} />
      ))}
    </div>
  );
};

export default DrugList;
