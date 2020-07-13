import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", photo: "./dog.svg" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
      console.log("what is evt", evt)
      //anytime you have an event all of the stuff is passed along 
      //state to change set equal to value and pass it in
      // brred and name are inside our state, so any change to those values causes setAnimal to run with stateToChange passed through
      // it watches you type into the input and holds onto that as stateToChange and then when you hit enter it subbmits those and creates a new database item.
    const stateToChange = { ...animal };
    console.log("stateToChange", stateToChange);
    console.log("stateToChange", stateToChange);
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm