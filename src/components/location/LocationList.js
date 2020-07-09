import React, { useState, useEffect } from 'react';
//import the components we will need 
//location JSX (html) card generator 
//location fetch calls for database
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = () => {
  // The initial state is an empty array
  const [Locations, setLocations] = useState([]);

  const getAnimals = () => {
    console.log("Animal List")
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
      console.log("useEffect")
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {animals.map(animal => <AnimalCard key={animal.id} pet={animal}/>)}
    </div>
  );
};
export default AnimalList