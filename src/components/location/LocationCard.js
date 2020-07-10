import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`${props.location.photo}`)} alt="Employee" id="locationPhoto"/>
        </picture>  
        <h3>
        <address>
            Visit Us at our {props.location.name} Location
            <br />
            500 Puppy Way, 
        </address>
        </h3>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.closeLocation(props.location.id)}>CLOSE</button>
      </div>
    </div>
  );
};

export default LocationCard;