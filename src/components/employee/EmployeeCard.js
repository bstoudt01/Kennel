import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
          <div>
                <picture>
                    <img src={require("./brett.jpg")} alt="Employee" id="brettPhoto"/>
                </picture>
            </div>
            <h2>
                Brett's Kennels
                <br />
                <small>Loving care when you're not there.</small>
            </h2>
      </div>
    </div>
  );
};

export default EmployeeCard;