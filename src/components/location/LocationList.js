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

const LocationList = (props) => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    console.log("Locations List")
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const closeLocation = id => {
   LocationManager.delete(id)
    .then(() => LocationManager.getAll().then(setLocations));
  };
  // got the locations from the API on the component's first render
  useEffect(() => {
      console.log("useEffect")
    getLocations();
  }, []);

  // Finally we use map() to "loop over" the locations array to show a list of locations cards
  return (
    <>
    <section className="section-content">
      <button type="button" className="btn" onClick={() =>{props.history.push("/locations/new")}}>New Location</button>
    </section>
      <div className="container-cards">
        {locations.map(location => <LocationCard key={location.id} locations={location} closeLocation={closeLocation} {...props}/>)}
      </div>
    </>
  );
};
export default LocationList