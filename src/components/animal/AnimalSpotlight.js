import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

const AnimalSpotlight = props => {
    //brings in anything from parent that we pass it (this time props from Home, that pass along the animal.id as props.animalId becayse animalId was declared as a property when this function was invoked in Home.js)
    //1  useState is declared with name and breed containing empty strings
  const [animal, setAnimal] = useState({ name: "", breed: "", photo:"./dog.svg"});

  //3
  //calls the api to get a specific animal using the props.animalId passed through
  useEffect(() => {
    AnimalManager.get(props.animalId).then(animal => {
        //then each animal is returned as setAnimal wthe the properties of that useState as keys to the values being passed through
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        photo: animal.photo
      });
    });
    // that props resets the state which causes  re-render of the return displaying the setState/setAnimal that was passed through until its triggered again (w. the button)
  }, [props.animalId]);

    //2 return runs with empy strings in the jsx
        //img src runs with dog picture since it has the direct path .
            //if the src was a proprty not provided yet (say on first render before gathering from the database), then you are REQUIRED to place something in that src on the first render (or any render).. you can make it a condtional and say if empty move on, or pass through a placerholder image when setting the useState of the property.
  return (
    <div className="animal-spotlight">
      <img src={require(`${animal.photo}`)} alt="My Dog" />
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;