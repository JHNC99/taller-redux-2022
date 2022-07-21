import React from "react";
import Card from "./Card";
const Cards = ({ items }) => {
  return (
    <div className="cards">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Cards;
