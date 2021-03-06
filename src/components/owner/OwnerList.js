import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = (props) => {
    console.log("getOwner")
  // The initial state is an empty array
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    console.log("Owners List")
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return OwnerManager.getAll().then(ownersFromAPI => {
      setOwners(ownersFromAPI)
    });
  };
  const removeOwner = (id) => {
    OwnerManager.delete(id)
    .then(() => OwnerManager.getAll().then(setOwners))
  }
  // got the animals from the API on the component's first render
  useEffect(() => {
      console.log("useEffect")
    getOwners();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {props.history.push("/owners/new")}}>
          Add Owner
        </button>
      </section>
      <div className="container-cards">
        {owners.map(owner => <OwnerCard key={owner.id} owner={owner} removeOwner={removeOwner} {...props}/>)}
      </div>
    </>
  );
};
export default OwnerList