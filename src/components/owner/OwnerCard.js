import React from "react";
import { Link } from "react-router-dom";
import "./Owner.css";
// owners link displaying owner information
const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
            <img src={require(`${props.owner.photo}`)} alt="ownerAvatar" id="Avatar"/>
        </picture>
        <h3>
          Owner Name: <span className="card-ownername">{props.owner.name}</span>
        </h3>
        <p>contact number: {props.owner.phoneNumber}</p>
        <Link to={`/owners/${props.owner.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.removeOwner(props.owner.id)}>Remove</button>
      </div>
    </div>
  );
};

export default OwnerCard;