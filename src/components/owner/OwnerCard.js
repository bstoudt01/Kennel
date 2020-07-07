import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Owner Name: <span className="card-petname">Yankee McDoodles</span>
        </h3>
        <p>Reason for Adopting: Wants to become a Professional Poop Wrangler!</p>
      </div>
    </div>
  );
};

export default OwnerCard;