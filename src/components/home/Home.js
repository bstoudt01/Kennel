import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import AnimalManager from "../../modules/AnimalManager";
// call animal manager to get any fresh data

const Home = () => {
  //STEP 1. defines use state and then creates function refeshspotlightAnimal, but function does not run b.c it is not invoked yet,
    //our database will never have an id of 0, this inital value is false just like having it empty to start with, it will render when true and it changes. 
  const [spotlightId, setSpotlightId] = useState(0);
  const refreshSpotlightAnimal = () => {
    //STEP 3B. new id passed from database
      //when setSpotlightId is passed as a paramater to (go to animalManager) its redeclared as the value passed by the retun of randomAnimal.id 
    AnimalManager.getRandomId().then(setSpotlightId);
  };
  //created but not run on first render
  //STEP 3. useEffect runs and (this time says) calls the function
  useEffect(() => {
    //STEP 3A. this function returns a new animal id which inturns changes setstate and calls the dom to be re-renderd
    refreshSpotlightAnimal();
  }, []);
  //STEP 2. return runs on first render (before useEffect).. 
  //STEP 4. reutrn runs 2nd render with data returned from useEffect
  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      {/* button click will give you a new animal (new value tells useEffect to re-render) */}
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        // && as a conditional, 
        //STEP 2A. spotlightId is 0 in the inital useState and does not run b.c its false (0 is not in our database)
        //STEP 4A. if spotlightid is true it shows <AnimalSpotlight />.. and passes the current spotlightId in as the value of a paramater animalId (see AnimalSpilight.js for rendering of spotlight) 
        //spotlightIds like if im here (true), and then do this... if im
        //&& always evaluates expression (true)
        //in javascript true && expression always evaluates to expression, and false && expression always evaluates to false.
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
    </>
  );
};

export default Home;