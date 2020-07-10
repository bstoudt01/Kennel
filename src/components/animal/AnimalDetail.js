import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", photo: "" });
  //set state isLoading so we can keep user for performing actions while things are true for isloading.
  const [isLoading, setIsLoading] = useState(true, {photo: ""});

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          photo: animal.photo
        });
        setIsLoading(false);
        //fALSE allows buttons to be clicked now that button is not disabled.
      });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    //set isloading to true so it cant be clicked again while the new url populates
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
      {(animal.photo !== "") && 
        <picture> 
        <img src={require(`${animal.photo}`)} alt="My Dog" />
          {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
        </picture>
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        {/* button disabled based on isLoading set state, wihch changes when we are not loading through our functions */}
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;