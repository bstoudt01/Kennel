import React from "react";

//2nd component created (owner, employee, location componentes also created in this step)
const AnimalCard = () => {
  return (
    <div className="container-cards">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">Doodles</span>
        </h3>
        <p>Breed: Poodle</p>
      </div>
    </div>
  );
};

export default AnimalCard;