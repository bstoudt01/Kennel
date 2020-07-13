import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", photo: "", address: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          photo: location.photo,
          address: location.address
        });
        setIsLoading(false);
      });
  }, [props.locationId]);
  
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
      {(location.photo !== "") && 
        <picture>
          <img src={require(`${location.photo}`)} alt="location" id="locationPhoto"/>
        </picture>
      }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <address>
            Visit Us at: {location.address} 
        </address>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;