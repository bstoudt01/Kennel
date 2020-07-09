import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
        <address>
            Visit Us at our {props.location.name} Location
            <br />
            500 Puppy Way, 
        </address>
        </h3>
      </div>
    </div>
  );
};

export default LocationCard;