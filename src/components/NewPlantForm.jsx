import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = { name, price: parseFloat(price), image}
    onAddPlant(newPlant);

    //reset
    setName('');
    setPrice('');
    setImage('');
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e)=>setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
