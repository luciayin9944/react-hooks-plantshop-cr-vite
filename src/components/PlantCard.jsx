import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setStock] = useState(true)

  const handleClick = () => {
    setStock(!inStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>Plant name: {plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
