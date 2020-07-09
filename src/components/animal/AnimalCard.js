import React from "react";

//2nd component created (owner, employee, location componentes also created in this step)
// now those get called in navbar and and rendered in applicationview
    //Application view is now the 3rd component created
const AnimalCard = (props) => {
  return (
    <div className="container-cards">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.pet.name}</span>
        </h3>
        <p>Breed: {props.pet.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;