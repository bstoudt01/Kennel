import React, { useState, useEffect } from 'react';
//import the components we will need 
// react useState ... useState is set to an empty array the is going to be filled with the first render of locations, and then updated the 2nd render, and then the 3rd render
      //Returns a stateful value, and a function to update it.
// react useEffect determines the difference between the newly returned state vs the current state and returns those current values to the DOM by maping through and creating indivdual cards / html elements using jsx
      //Accepts a function that contains imperative, possibly effectful code.
//location JSX (html) card generator 
//location fetch calls for database
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = () => {
  // The initial state is an empty array
  const [Locations, setLocations] = useState([]);

  const getLocations = () => {
    console.log("Locations List")
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
      console.log("useEffect")
    getLocations();
  }, []);

  // Finally we use map() to "loop over" the locations array to show a list of locations cards
  return (
    <div className="container-cards">
      {Locations.map(location => <LocationCard key={location.id} location={location}/>)}
    </div>
  );
};
export default LocationList