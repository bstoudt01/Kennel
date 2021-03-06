import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = (props) => {
    console.log("getAnimal")
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    console.log("Animal List")
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then(animalsFromAPI => {
      console.log("what is inital value", animalsFromAPI)
      setAnimals(animalsFromAPI)
    });
  };

  //the 2nd .then (after delete(id) ) does the same thing as the above .then when getAnimals returns
  const deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll().then(setAnimals));
  };

  // got the animals from the API on the component's first render
  //The function parameter is where you place the code that interacts with an external resource. "getAnimals()"
  //The empty array argument tells React to call the function on the first render of the component. "[]"
  useEffect(() => {
      console.log("useEffect")
    getAnimals();
  }, []);
  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    //add this button above your display of animal cards
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {props.history.push("/animals/new")}}>
          Admit Animal
        </button>
      </section>
      <div className="container-cards">
        {animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={deleteAnimal} {...props}/>)}
      </div>
    </>
  );
};
export default AnimalList