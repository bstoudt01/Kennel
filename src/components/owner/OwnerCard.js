import React from "react";
// owners link displaying owner information
const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Owner Name: <span className="card-petname">{props.owner.name}</span>
        </h3>
        <p>contact number: {props.owner.phoneNumber}</p>
      </div>
    </div>
  );
};

export default OwnerCard;