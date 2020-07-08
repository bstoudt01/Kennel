import React from "react";
// owners link displaying owner information
const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Owner Name: <span className="card-petname">Yankee McDoodles</span>
        </h3>
        <p>Reason for Choosing Brett's Kennels: Wants Doodles to learn how to pickup his own poop!</p>
      </div>
    </div>
  );
};

export default OwnerCard;