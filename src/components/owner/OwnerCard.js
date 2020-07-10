import React from "react";
import "./Owner.css"
// owners link displaying owner information
const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
            <img src={require("./Bob.jpg")} alt="Employee" id="bobPhoto"/>
        </picture>
        <h3>
          Owner Name: <span className="card-ownername">{props.owner.name}</span>
        </h3>
        <p>contact number: {props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.removeOwner(props.owner.id)}>Remove</button>
      </div>
    </div>
  );
};

export default OwnerCard;