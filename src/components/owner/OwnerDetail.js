import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "", photo: "./Bob.jpg" });
  //set state isLoading so we can keep user for performing actions while things are true for isloading.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId)
      .then(owner => {
        setOwner({
          name: owner.name,
          phoneNumner: owner.phoneNumer,
          photo: owner.photo
        });
        setIsLoading(false);
        //fALSE allows buttons to be clicked now that button is not disabled.
      });
  }, [props.ownerId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    //set isloading to true so it cant be clicked again while the new url populates
    setIsLoading(true);
    OwnerManager.delete(props.ownerId).then(() =>
      props.history.push("/owners")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
      {(owner.photo !== "") && 
        <picture> 
        <img src={require(`${owner.photo}`)} id="ownerAvatar" alt="Avatar" />
          {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
        </picture>
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
        <p>Contact Number: {owner.phoneNumber}</p>
        {/* button disabled based on isLoading set state, wihch changes when we are not loading through our functions */}
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove Customer
        </button>
      </div>
    </div>
  );
}

export default OwnerDetail;