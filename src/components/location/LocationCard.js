import React from "react";
import "./Location.css";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
        {/* does not require a placeholder oconditional because its being populated from an array thats already created (using .map), its not pulling a fresh requrest */}
          <img src={require(`${props.locations.photo}`)} alt="location" id="locationPhoto"/>
        </picture>  
        <h3>
        <address>
            Visit Us at our {props.locations.name} Location
            <br />
            {props.locations.address} 
        </address>
        </h3>
        <button type="button"
                onClick={() => { props.history.push(`/locations/${props.locations.id}/details`) }}>
                Details
            </button>
        <button type="button"
          onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.closeLocation(props.locations.id)}>CLOSE</button>
      </div>
    </div>
  );
};

export default LocationCard;