import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('All');

  useEffect(() => {
    //fetch('/db.json') 
    fetch('http://localhost:6001/plants')
      .then((response)=>response.json())
      .then((data) => {
        console.log(data);
        // setPlants(data.plants)
        setPlants(data)
      })
      .catch(error => console.log(error));
  }, [])

  const onAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const onSearch = (inputName) => {
    setSearch(inputName)
  };

  const searchedPlants = search==='All' 
    ? plants : 
    plants.filter((plant)=>plant.name===search)


  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search onSearch={onSearch}/>
      <PlantList plants={searchedPlants}/>
    </main>
  );
}

export default PlantPage;
