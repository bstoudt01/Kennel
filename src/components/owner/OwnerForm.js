import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "", photo: "./Bob.jpg" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
      console.log("what is evt", evt)
      //anytime you have an event all of the stuff is passed along 
      //state to change set equal to value and pass it in
      // brred and name are inside our state, so any change to those values causes setAnimal to run with stateToChange passed through
      // it watches you type into the input and holds onto that as stateToChange and then when you hit enter it subbmits those and creates a new database item.
    const stateToChange = { ...owner };
    console.log("stateToChange", stateToChange);
    console.log("stateToChange", stateToChange);
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.phoneNumber === "") {
      window.alert("Please input an owner name and contact number");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      OwnerManager.post(owner)
        .then(() => props.history.push("/owners"));
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
              placeholder="Owner Name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phoneNumber"
              placeholder="555-111-2222"
            />
            <label htmlFor="phoneNumber">Contact Number</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm